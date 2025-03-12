import React from "react";
import "../src/index.css"
import "./styles/HeaderHome.css"
import "../logic-components/HeaderMenu"


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
                            <li><a href="#home" className="active"><span className="nav-number">01</span> INICIO</a></li>
                            <li><a href="#about"><span className="nav-number">02</span> NOSOTROS</a></li>
                            <li><a href="#services"><span className="nav-number">03</span> SERVICIOS</a></li>
                            <li><a href="#projects"><span className="nav-number">04</span> PROYECTOS</a></li>
                            <li><a href="#contact"><span className="nav-number">05</span> CONTACTO</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}