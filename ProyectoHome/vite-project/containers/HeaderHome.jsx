import React from "react";
import "../src/index.css"
import "./styles/HeaderHome.css"
import HeaderMenuLogic from "../logic-components/HeaderMenu.jsx"



export default function HeaderHome () {
    return (
        <header className="site-header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <a href="index.html">
                            <span className="logo-waso">Activ</span>
                            <span className="logo-strategy">Sena</span>
                        </a>
                    </div>
                    
                    <nav className="main-nav">
                        <button className="menu-toggle" id="menuToggle" aria-expanded="false">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                        <ul className="nav-menu" id="navMenu">
                            <li><a href="#home" className="active">INICIO</a></li>
                            <li><a href="#about">NOSOTROS</a></li>
                            <li><a href="#services">SERVICIOS</a></li>
                            <li><a href="#projects">PROYECTOS</a></li>
                            <li><a href="#contact">CONTACTO</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <HeaderMenuLogic />
        </header>
        
    )
}


