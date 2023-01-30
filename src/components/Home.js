import React, {useContext} from 'react';
import '../styles/home.css'
import Moi from '../assets/images/profile-pic.png';
import { LanguageValue } from '../context/LanguageValue';
import { DataLanguage } from '../context/DataLanguage';


export default function Home () {


    //import du context
    
    const {language} = useContext(LanguageValue);
    const {data} = useContext(DataLanguage);

    return (
        <div className='home'>
            <img src={Moi} alt="c'est moi" />
            <div className='text'>
                {data ? (<h3>{data[language].home.welcome}</h3>) : (<p>Loading data...</p>)}
                {data ? (<h1>{data[language].home.title}</h1>) : (<p>Loading data...</p>)}
                {data ? (<h3>{data[language].home.catchPhrase}</h3>) : (<p>Loading data...</p>)}
            </div>
        </div> 
    );
}
