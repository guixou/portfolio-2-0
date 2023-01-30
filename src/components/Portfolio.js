import React from 'react';
import '../styles/portfolio.css';
import CapiCrea from '../assets/images/réalisation/capiCrea.png'
import LeLocal from '../assets/images/réalisation/leLocal.png'
import MontBlanc from '../assets/images/réalisation/montBlanc.png'
import Rafale from '../assets/images/réalisation/rafale.png'
import TrainingStudio from '../assets/images/réalisation/trainingStudio.jpg'
import MiniMoi from '../assets/images/mini-moi.png'
import { Link, Outlet} from "react-router-dom"

export default function Portfolio() {
    return (
        <div className='portfolio'>
            <img className='MoiImg' src={MiniMoi} alt="c'est toujours moi" />
            <div>
                <h2>Portfolio</h2>
                <div className='project'>
                    <div>
                        <Link to="leLocal"><img src={LeLocal} alt="capture d'écran du site le Local" className='leLocal'/></Link>
                        <Link to="rafale"><img src={Rafale} alt="capture d'écran du site rafale" className='rafale'/></Link>
                        <Link to="trainingStudio"><img src={TrainingStudio} alt="capture d'écran du site training studio" className='trainingStudio'/></Link>
                        <Link to="capiCrea"><img src={CapiCrea} alt="capture d'écran du site capi crea" className='capiCrea'/></Link>
                        <Link to="montBlanc"><img src={MontBlanc} alt="capture d'écran du site mont blanc" className='montBlanc'/></Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
