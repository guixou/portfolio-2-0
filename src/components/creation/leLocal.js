import React, {useContext} from 'react';
import '../../styles/portfolio.css'
import { LanguageValue } from '../../context/LanguageValue';
import { DataLanguage } from '../../context/DataLanguage';

export default function LeLocal() {
    
    const {language} = useContext(LanguageValue);
    const {data} = useContext(DataLanguage);

    return (
        <div className='description'>
            
            <h4>Le local</h4>
            {data ? (<p>{data[language].portfolio.LeLocal.description}</p>) : (<p>Loading data...</p>)}
            {data ? (<p>{data[language].portfolio.LeLocal.conclusion}</p>) : (<p>Loading data...</p>)}
            {data ? (<a href="https://guillaumepic.sites.3wa.io/ProjetFinal/index.php" target="_blank">{data[language].portfolio.visite}</a>) : (<p>Loading data...</p>)}
            <a href="https://github.com/guixou/CapiCrea"  target="_blank">GitHub</a>

        </div>
    );
}