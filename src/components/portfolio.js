import React, {useContext} from 'react';
import '../styles/portfolio.css';
import CapiCrea from '../assets/images/réalisation/capiCrea.png'
import LeLocal from '../assets/images/réalisation/leLocal.png'
import MontBlanc from '../assets/images/réalisation/montBlanc.png'
import Rafale from '../assets/images/réalisation/rafale.png'
import TrainingStudio from '../assets/images/réalisation/trainingStudio.jpg'
import MiniMoi from '../assets/images/mini-moi.png'
import { ProjectValue } from '../context/ProjectValue';
import { LanguageValue } from '../context/LanguageValue';
import { DataLanguage } from '../context/DataLanguage';


export default function Portfolio() {


    const {language} = useContext(LanguageValue);
    const {data} = useContext(DataLanguage);


    
    const {toggleProject, project} = useContext(ProjectValue)

    return (
        <div className='portfolio'>
            <img className='MoiImg' src={MiniMoi} alt="c'est toujours moi" />
            <div>
                <h2>Portfolio</h2>
                <div className='project'>
                    <div>
                        <div onClick={() => toggleProject("leLocal")}><img src={LeLocal} alt="capture d'écran du site le Local" className='leLocal'/></div>
                        <div onClick={() => toggleProject("rafale")}><img src={Rafale} alt="capture d'écran du site rafale" className='rafale'/></div>
                        <div onClick={() => toggleProject("trainingStudio")}><img src={TrainingStudio} alt="capture d'écran du site training studio" className='trainingStudio'/></div>
                        <div onClick={() => toggleProject("capiCreative")}><img src={CapiCrea} alt="capture d'écran du site capi crea" className='capiCrea'/></div>
                        <div onClick={() => toggleProject("montBlanc")}><img src={MontBlanc} alt="capture d'écran du site mont blanc" className='montBlanc'/></div>
                    </div>
                    <div className='description'>
                        
                        {project === "test" ? (<p></p>) : (

                        
                            data ? (

                                <React.Fragment>
                                    
                                    <h4>{data[language].portfolio[project].title}</h4>
                                    <p>{data[language].portfolio[project].description}</p>
                                    <p>{data[language].portfolio[project].conclusion}</p>
                                    <a href={data[language].portfolio[project].link} target="_blank">{data[language].portfolio.visite}</a>
                                    <a href={data[language].portfolio[project].gitHub}  target="_blank">GitHub</a>
                                </React.Fragment>

                            ) : (<p>Loading data...</p>)                        
                        )}

                        

                    </div>
                </div>
            </div>
        </div>
    );
}