import React from 'react';
import '../styles/portfolio.css';
import CapiCrea from '../assets/images/réalisation/capiCrea.png'
import LeLocal from '../assets/images/réalisation/leLocal.png'
import MontBlanc from '../assets/images/réalisation/montBlanc.png'
import Rafale from '../assets/images/réalisation/rafale.png'
import TrainingStudio from '../assets/images/réalisation/trainingStudio.jpg'
import { Link, Outlet} from "react-router-dom"

function portfolio() {
    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            <div className='project'>
                <Link to="leLocal"><img src={LeLocal} alt="" /></Link>
                <Link to="rafale"><img src={Rafale} alt="" /></Link>
                <Link to="trainingStudio"><img src={TrainingStudio} alt="" /></Link>
                <Link to="capiCrea"><img src={CapiCrea} alt="" /></Link>
                <Link to="montBlanc"><img src={MontBlanc} alt="" /></Link>
            </div>
            <Outlet />
        </div>
    );
}

export default portfolio;