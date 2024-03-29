import React, { useState, useEffect, useContext } from 'react';
import Linkedin from '../assets/svg/linkedin.svg';
import Cv from '../assets/svg/cv.svg';
import Github from '../assets/svg/github.svg';
import ActiveNav from '../assets/svg/activeNav.svg'
import DisableNav from '../assets/svg/disableNav.svg'
import '../styles/header.css'
import {Link} from "react-router-dom"
import { LanguageValue } from '../context/LanguageValue';
import { DataLanguage } from '../context/DataLanguage';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    // affichage airport
    const [letter, setLetter] = useState('');
    const [pas, setPas] = useState(0);
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const finalText = "GUILLAUME PICARD"
  
    useEffect(() => {
        var passage = 0;
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
  
    //import du context
    
    const {language} = useContext(LanguageValue);
    const {data} = useContext(DataLanguage);

    return  isOpen ? (

        <React.Fragment>
            
            <div className='headerPC'>
                <h2>Guillaume picard</h2>
                <nav>
                    {data ? (<Link to="/">{data[language].header.accueil}</Link>) : (<p>Loading data...</p>)}
                    {data ? (<Link to="/parcours">{data[language].header.parcours}</Link>) : (<p>Loading data...</p>)}
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
                            {data ? (<Link to="/">{data[language].header.accueil}</Link>) : (<p>Loading data...</p>)}
                            {data ? (<Link to="/parcours">{data[language].header.parcours}</Link>) : (<p>Loading data...</p>)}
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
                <h2>{finalText.slice(0, pas) + letter}</h2>
                <nav>
                    {data ? (<Link to="/">{data[language].header.accueil}</Link>) : (<p>Loading data...</p>)}
                    {data ? (<Link to="/parcours">{data[language].header.parcours}</Link>) : (<p>Loading data...</p>)}
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
