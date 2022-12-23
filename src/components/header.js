import React, { useState } from 'react';
import Linkedin from '../assets/svg/linkedin.svg';
import Cv from '../assets/svg/cv.svg';
import Github from '../assets/svg/github.svg';
import ActiveNav from '../assets/svg/activeNav.svg'
import DisableNav from '../assets/svg/disableNav.svg'
import '../styles/header.css'
import {Link} from "react-router-dom"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    

    return  isOpen ? (

        <React.Fragment>
            
            <div className='headerPC'>
                <h2>Guillaume Picard</h2>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/parcours">Parcours</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
    
                <div className='reseau'>
                    <a href="https://www.linkedin.com/in/guillaume-picard-9513aa1b5/">
                        <img src={Linkedin} alt="acéder à mon Linkedin" />
                    </a>
                    <Link to="/cv">
                        <img src={Cv} alt="acéder à Mon Cv" />
                    </Link>
                    <a href="https://github.com/guixou">
                        <img src={Github} alt="acéder à mon Github" />
                    </a>
                </div>
            </div>
    
            <div className='headerMobile'>
                <h2>guillaume picard</h2>
                <div className='menu'>
                    <div className='menuBg'>
                        <nav>
                            <Link to="/">Accueil</Link>
                            <Link to="/parcours">Parcour</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>

                        <div className='reseau'>
                            <a href="https://www.linkedin.com/in/guillaume-picard-9513aa1b5/">
                                <img src={Linkedin} alt="acéder à mon Linkedin" />
                            </a>
                            <Link to="/cv">
                                <img src={Cv} alt="accéder à Mon Cv" />
                            </Link>
                            <a href="https://github.com/guixou">
                                <img src={Github} alt="acéder à mon Github" />
                            </a>
                        </div>
                    </div>

                    <button 
                        className='activeNav'
                        onClick={() => setIsOpen(false)} 
                    >
                        <img src={DisableNav} alt=""/>
                    </button>
                </div>
            </div>
        </React.Fragment>

    ) : (
        
        <React.Fragment>

            <div className='headerPC'>
                <h2>Guillaume Picard</h2>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/parcours">Parcours</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
    
                <div className='reseau'>
                    <a href="https://www.linkedin.com/in/guillaume-picard-9513aa1b5/">
                        <img src={Linkedin} alt="acéder à mon Linkedin" />
                    </a>
                    <Link to="/cv">
                        <img src={Cv} alt="acéder à Mon Cv" />
                    </Link>
                    <a href="https://github.com/guixou">
                        <img src={Github} alt="acéder à mon Github" />
                    </a>
                </div>
            </div>

            <div className='headerMobile headerActive'>
                <h2>Guillaume picard</h2>
                <button
                    className='disableNav'
                    onClick={() => setIsOpen(true)}
                >
                    <img src={ActiveNav} alt="" />
                </button>
            </div>

        </React.Fragment>
    );

}