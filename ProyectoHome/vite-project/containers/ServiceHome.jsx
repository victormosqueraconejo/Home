import React from 'react'
import "../src/index.css"
import "./styles/ServiceHome.css"
import ServiceCardComponent from '../components/ServiceCardComponent'

let services = [{
  title: "Planificación Estratégica",
  description: "Te ayudamos a desarrollar una visión clara y una hoja de ruta para que tu negocio alcance el éxito a largo plazo."
},{
  title: "Investigación de Mercado",
  description: "Realizamos análisis de mercado completos para identificar oportunidades y entender a tu competencia."
},
{
  title: "Asesoría Financiera",
  description: "Nuestros expertos financieros proporcionan orientación para optimizar el rendimiento y la rentabilidad de tu negocio."
}]


export default function ServiceHome() {
  return (
    <section  className="services-section">
            <div id="services" className="container">
                <div className="section-header">
                    <h2>Nuestros Servicios</h2> {/*Cambiar toda esta parte por nouestros servicions*/}
                </div>
                <section className='services-grid'>
                <ServiceCardComponent title={services[0].title} description={services[0].description} />
                <ServiceCardComponent title={services[1].title} description={services[1].description} />
                <ServiceCardComponent title={services[2].title} description={services[2].description} />
                </section>
 
            </div>
        </section>
    
  )
}
