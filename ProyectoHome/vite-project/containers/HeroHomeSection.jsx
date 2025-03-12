import React from 'react'
import "../src/index.css"
import "./styles/HeroHomeSection.css"
import "../logic-components/HeroSlider.js"


export default function HeroHomeSection() {
  return (
    <section id="home" className="hero-section">
        <div className="container">
            <div className="hero-content">
                <div className="hero-subtitle">
                    PRESENTANDO ACTIV SENA <span>03/03</span>
                </div>
                <h1 className="hero-title">
                    Gestiona <span className="highlight">Registra</span> en la plataforma mas innovadora
                </h1>
                <div className="hero-actions">
                    <a href="#" className="btn btn-primary">Registrase</a>
                    <a href="#" className="btn btn-primary">Iniciar Sesion</a>
                    <a href="#" className="play-btn"> {/*Video de introduccion o algo conectar con iframe */}
                        <i className="icon-play"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="hero-controls">
            <button className="hero-control prev">
                <i className="icon-arrow-left"></i>
            </button>
            <button className="hero-control next">
                <i className="icon-arrow-right"></i>
            </button>
        </div>
    </section>

    
  )
}
