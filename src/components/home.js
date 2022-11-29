import React from 'react';
import '../styles/home.css'
import Moi from '../assets/images/profile-pic.png';

function Home () {
    return (
        <div className='content'>
            <img src={Moi} alt="c'est moi" />
            <div className='text'>
                <h3>Bienvenue sur mon portfolio</h3>
                <h1>Développeur Intégrateur web</h1>
                <h3>Junior en freelance</h3>
            </div>
        </div> 
    );
}


export default Home