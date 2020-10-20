/// Rotas que podem ser acessadas para contato com a api
////////////////////////////
const UserController = require('./controllers/UserController');


const express = require('express');
const jwt = require('jsonwebtoken');


/////// verificação de token para validar usuario nas requisições
function verifyJWT(req, res, next) {
    var token = req.headers['authorization'];
    if (!token) 
        return res.status(401).json({auth: false, message: 'No token provided.'});
    
    jwt
        .verify(token, 'tokenteste', function (err, decoded) {
            if (err) 
                return res.status(500).json({auth: false, message: 'Failed to authenticate token.'});
            
            req.userId = decoded.id;

            if (decoded.id != req.params.id_user) {
                return res
                    .status(500)
                    .json({auth: false, message: 'User conflit'});
            }

            if(decoded.id == 1){
                req.params.su = true;
            }else{
                req.params.su = false;
            }

            next();
        });
}

const routes = express.Router();

//////////////////////ROTA PARA INSERSÃO DEFAULT NO DATABASE
routes.post('/user/login', UserController.login);
routes.post('/user/register', UserController.register);

module.exports = routes;