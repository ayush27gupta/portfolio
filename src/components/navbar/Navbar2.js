import React, { Component } from 'react'
import '../navbar/Navbar.css'

export default class Navbar2 extends Component {
    render() {
        return (
        

          
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand named" href="#">Ayush Gupta</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                            </li>
                    
                    </ul>
                
                </div>
            </div>
        </nav>

            
        )
    }
}
