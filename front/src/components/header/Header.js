import React from 'react'

import './header.css'

const Header = () => {

    return (
        <div className="headerBox">
            <div className="menu1">
                <div className="logo">
                    <a href="/home">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"></img>
                    </a>
                </div>
                <div className="menu">
                    <ul>
                        <li>Inicio</li>
                        <li>Séries</li>
                        <li>Filmes</li>
                        <li>Mais Recentes</li>
                        <li>Minha Lista</li>
                    </ul>
                </div>
            </div>
            <div className="menu2">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
                </a>
            </div>
        </div>
    )

}

export default Header;