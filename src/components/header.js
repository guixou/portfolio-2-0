import React, { useState, useEffect } from 'react';
import Linkedin from '../assets/svg/linkedin.svg';
import Cv from '../assets/svg/cv.svg';
import Github from '../assets/svg/github.svg';
import ActiveNav from '../assets/svg/activeNav.svg'
import DisableNav from '../assets/svg/disableNav.svg'
import '../styles/header.css'
import {Link} from "react-router-dom"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // charger/utiliser mon Json
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('data.json');
            const json = await response.json();
            setData(json);
        }
        fetchData();
        }, []);

    // affichage airport
    const [letter, setLetter] = useState('');
    const [pas, setPas] = useState(0);
    var passage = 0;
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const finalText = "GUILLAUME PICARD"
  
    useEffect(() => {
      const timer = setInterval(() => {
          setPas(pas => pas + 1);
          passage = passage + 1;
          setLetter(letter => {
              let newLetter = '';
              for (let i = 0; i < finalText.length - passage; i++) {
                  newLetter += possible[Math.floor(Math.random() * possible.length)];
              }
              return newLetter;
          });
      }, 50);
      setTimeout(() => {
          clearInterval(timer);
      }, finalText.length * 100);
    }, []);
  

    return  isOpen ? (

        <React.Fragment>
            
            <div className='headerPC'>
                <h2>Guillaume picard</h2>
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
                <h2 id='letter3'>{finalText.slice(0, pas) + letter}</h2>
                <nav>
                    <Link to="/">Acceuil</Link>
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