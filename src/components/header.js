import React, { useState } from 'react';
import Linkedin from '../assets/svg/linkedin.svg';
import Cv from '../assets/svg/cv.svg';
import Github from '../assets/svg/github.svg';
import ActiveNav from '../assets/svg/activeNav.svg'
import DisableNav from '../assets/svg/disableNav.svg'
import '../styles/header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    

    return isOpen ? (
        <React.Fragment>
            <div className='header'>
                <h2>Guillaume picard</h2>
                                    
                <nav>
                    <a href="">Accueil</a>
                    <a href="">Parcour</a>
                    <a href="">Portfolio</a>
                    <a href="">Contact</a>
                </nav>

                <div className='reseau'>
                    <a href="https://www.linkedin.com/in/guillaume-picard-9513aa1b5/">
                        <img src={Linkedin} alt="acéder à mon Linkedin" />
                    </a>
                    <a href="">
                        <img src={Cv} alt="acéder à Mon Cv" />
                    </a>
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
        </React.Fragment>
    ) : (
        <div className='header headerActive'>
            <h2>Guillaume picard</h2>
            <button
                className='disableNav'
                onClick={() => setIsOpen(true)}
            >
                <img src={ActiveNav} alt="" />
            </button>
        </div>
    );

}

export default Header