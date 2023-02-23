import React, { useEffect } from 'react'
import { Link,useLocation  } from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
  let location = useLocation();
  
  return (
    <div className="d-flex fixed-top justify-content-center"  style={{paddingTop : '45px' , paddingBottom : '30px' , marginBottom: '45px'  }}>
      <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about' ? "location" : ''} `} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/certificates' ? "location" : ''} `}  to="/certificates">Certificates</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/resume' ? "location" : ''} `} to="/resume">Resume</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/projects' ? "location" : ''} `} to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/contact' ? "location" : ''} `} to="/contact">Contact</Link>
        </li>
      
       
      </ul>
      
    </div>
    
  </div>
</nav>
    </div>
  )
}
