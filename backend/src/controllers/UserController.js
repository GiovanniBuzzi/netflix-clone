const User = require('../models/User');

var jwt = require('jsonwebtoken');
const { create } = require('../models/User');


module.exports = {

    async login(req,res){

        const {email, password} = req.body;
        if(email == null || password == null){
            return res.status(400).json({ error: 'Email/Password Null ???'});
        }

        const user = await User.findOne({where:{email:email}});
        if(!user){
            return res.status(400).json({ error: 'Invalid Email'});
        }

        if(user.password == password){
            const id = user.id;
            var token = jwt.sign({id}, 'tokenteste', {
                expiresIn: 1200
            });
            
            return res.json({auth:true, token: token, user_id:user.id, user_name:user.name});
        }

        return res.status(400).json({ error: 'Invalid Password'});

    },
    async register(req,res){

        const {email, password, name} = req.body;
        if(email == null || password == null || name == null){
            return res.status(400).json({ error: 'Email/Password/Name Null ???'});
        }

        const user = await User.findOne({where:{email:email}});
        if(user){
            return res.status(400).json({ error: 'Email já existe'});
        }

        const user1 = await User.create({email:req.body.email, password:req.body.password, name:req.body.name});

        return res.json({user1, message:'Success'});

    },
}