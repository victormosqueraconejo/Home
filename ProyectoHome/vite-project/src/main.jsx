import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import "../logic-components/MainHome.js"

import HeaderHome from '../containers/HeaderHome.jsx'
import HeroHomeSection from '../containers/HeroHomeSection.jsx'
import AboutComponent from '../containers/AboutComponent.jsx'
import ServiceHome from '../containers/ServiceHome.jsx'
import ProjectsHome from "../containers/ProjectsHome.jsx"
import ContactHome from '../containers/ContactHome.jsx'
import FooterHome from '../containers/FooterHome.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderHome />
    <HeroHomeSection />
  <AboutComponent />
  <ServiceHome />
  <ProjectsHome />
  <ContactHome />
  <FooterHome />
  </StrictMode>,
)
