import React from 'react';
import '../styles/contact.css'
import ComputerBg from '../assets/images/computerBg.jpg'
import Copy from '../assets/svg/copy.svg'

function contact() {
      
    return (
        <div className='contact'>
            <div className='description'>
                <h3>Création de site web :</h3>
                <ul>
                    <li>Création de site vitrine</li>
                    <li>Intégration de maquette</li>
                    <li>Création de maquette</li>
                </ul>
                <h3>Disponible pour tout :</h3>
                <ul>
                    <li>Projet en HTML CSS JS REACT</li>
                </ul>
            </div>
            <div className='mail'>
                <h3>Contact par mail :</h3>
                <a href="#" value="Pro.Guillaume.Picard@gmail.com">Pro.Guillaume.Picard@gmail.com <img src={Copy} alt="copier l'email" /></a>
                <p>Localisé sur Le Mans 72</p>
            </div>
        </div>
    );
}

export default contact;