import React from 'react';
import '../styles/portfolio.css';
import CapiCrea from '../assets/images/réalisation/capiCrea.png'
import LeLocal from '../assets/images/réalisation/leLocal.png'
import MontBlanc from '../assets/images/réalisation/montBlanc.png'
import Rafale from '../assets/images/réalisation/rafale.png'
import TrainingStudio from '../assets/images/réalisation/trainingStudio.jpg'
import MiniMoi from '../assets/images/mini-moi.png'
import { Link, Outlet} from "react-router-dom"

function portfolio() {
    return (
        <div className='portfolio'>
            <img className='MoiImg' src={MiniMoi} alt="c'est toujours moi" />
            <div>
                <h2>Portfolio</h2>
                <div className='project'>
                    <div>
                        <Link to="leLocal"><img src={LeLocal} alt="capturé d'écrant du site" className='leLocal'/></Link>
                        <Link to="rafale"><img src={Rafale} alt="capturé d'écrant du site" className='rafale'/></Link>
                        <Link to="trainingStudio"><img src={TrainingStudio} alt="capturé d'écrant du site" className='trainingStudio'/></Link>
                        <Link to="capiCrea"><img src={CapiCrea} alt="capturé d'écrant du site" className='capiCrea'/></Link>
                        <Link to="montBlanc"><img src={MontBlanc} alt="capturé d'écrant du site" className='montBlanc'/></Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default portfolio;