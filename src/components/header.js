import { useState } from 'react';
import Linkedin from '../assets/svg/linkedin.svg';
import Cv from '../assets/svg/cv.svg';
import Github from '../assets/svg/github.svg';
import HoverNav from '../assets/svg/hoverNav.svg'
import '../styles/header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    

    return isOpen ? (
        <div className='header'>
            <h2>Guillaume picard</h2>
                <button 
                    className='HoverNav'
                    onClick={() => setIsOpen(false)} 
                >
                    <img src={HoverNav} alt=""/>
                </button>
                
            <nav>
                <a href="">Accueil</a>
                <a href="">Parcour</a>
                <a href="">Portfolio</a>
            </nav>
            <div className='reseau'>
                <img src={Linkedin} alt="acéder à mon Linkedin" />
                <img src={Cv} alt="acéder à Mon Cv" />
                <img src={Github} alt="acéder à mon Github" />
            </div>
        </div>
    ) : (
        <button 
            className='HoverNav'
            onClick={() => setIsOpen(true)}   
        >
            <p>ouvert</p>
        </button>
    );

}

export default Header