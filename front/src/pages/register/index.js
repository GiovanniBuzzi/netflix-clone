import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import db from '../../services/api/database/db';

import './register.css';

import Img from '../../images/backlogin.jpg';

///// funcao responsavel pelo login do usuario
//// acesso a api, validação de login e senha
//// caso ocorrer tudo corretamente 
//// algumas informações sao armazenadas no storage do navegador

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [name, setName] = useState('');

    function handleRegister(){
        if(password === password1){    
            db.post('/user/register',{email:email, password:password, name:name})
            .then((response) => redirect(response))
            .catch((res) => console.log(res));  
        }else{
            alert("Senhas não conferem");
        } 
    }

    function redirect(response){
        if(response.data.message === 'Success')
            window.location.replace('/login');
    }

    return (
        <section className='register' style={{
            backgroundImage: `url(${Img})`}}>
            <div className='logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"></img>
                </a>
            </div>
            <div className='back'>
                <div className='box'>
                    <form className='form'onSubmit={(event) => {event.preventDefault()}}>
                        <h1>Registro</h1>
                        <input placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        <p></p>
                        <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <p></p>
                        <input placeholder="Confirmar Senha" type="password" value={password1} onChange={e => setPassword1(e.target.value)}/>
                        <p></p>
                        <input placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        <p></p>
                        <div className='botao'>
                            <button onClick={handleRegister}><strong>Criar Conta</strong></button>
                        </div>
                        <div className="signIn">
                            <h3>Já tem uma conta? <Link style={{color:"white"}} to="/login">Sign In</Link></h3>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;