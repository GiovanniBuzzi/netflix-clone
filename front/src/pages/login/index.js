import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import db from '../../services/api/database/db';

import './login.css';

import Img from '../../images/backlogin.jpg';

///// funcao responsavel pelo login do usuario
//// acesso a api, validação de login e senha
//// caso ocorrer tudo corretamente 
//// algumas informações sao armazenadas no storage do navegador

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        db.post('/user/login',{email:email, password:password})
        .then((response) => doRedirect(response))
        .catch((response) => console.log(response.error)/*localStorage.setItem('login',false)*/);    
    }

    function doRedirect(response){
        if(response.data.auth === true){
            localStorage.setItem('login',response.data.auth);
            sessionStorage.setItem('@token_jwt',response.data.token);
            sessionStorage.setItem('user_name',response.data.user_name);
            sessionStorage.setItem('user_id',response.data.user_id);
            sessionStorage.setItem('su', response.data.su);

            window.location.replace('/home');
        }
    }

    return (

        <section className='login' style={{
            backgroundImage: `url(${Img})`}}>
            <div className='logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"></img>
                </a>
            </div>
            <div className='back'>
                <div className='box'>
                    <form className='form'onSubmit={(event) => {event.preventDefault()}}>
                        <h1>Entrar</h1>
                        <input placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        <p></p>
                        <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <p></p>
                        <div className='botao'>
                            <button onClick={handleLogin}><strong>Entrar</strong></button>
                        </div>
                        <div className="signIn">
                            <h3>Novo por aqui? <Link style={{color:"white"}} to="/register">Assine Agora</Link></h3>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;