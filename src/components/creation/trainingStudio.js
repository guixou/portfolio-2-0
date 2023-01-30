import React, {useContext} from 'react';
import { LanguageValue } from '../../context/LanguageValue';
import { DataLanguage } from '../../context/DataLanguage';

export default function TrainingStudio() {
    
    const {language} = useContext(LanguageValue);
    const {data} = useContext(DataLanguage);
    return (
        <div className='description'>
            
            <h4>Training Studio</h4>
            {data ? (<p>{data[language].portfolio.trainingStudio.description}</p>) : (<p>Loading data...</p>)}
            {data ? (<p>{data[language].portfolio.trainingStudio.conclusion}</p>) : (<p>Loading data...</p>)}
            {data ? (<a href="https://guillaumepic.sites.3wa.io/ProjetFinal/index.php" target="_blank">{data[language].portfolio.visite}</a>) : (<p>Loading data...</p>)}
            <a href="https://github.com/guixou/TrainingStudio" target="_blank">GitHub</a>
        
        </div>
    );
}