import React, {useContext} from 'react';
import '../styles/contact.css'
import ComputerBg from '../assets/images/computerBg.jpg'
import Copy from '../assets/svg/copy.svg'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { LanguageValue } from '../context/LanguageValue';
import { DataLanguage } from '../context/DataLanguage';

export default function Contact() {

    //import du context
    
    const {language} = useContext(LanguageValue);
    const {data} = useContext(DataLanguage);

    return (
        <div className='contact'>
            <img src={ComputerBg} alt="ordinateur" className='computerBg' />
            <div className='description'>
                
                {data ? (<h3>{data[language].contact.tittle1}</h3>) : (<p>Loading data...</p>)}
                <ul>
                    {data ? (<li>{data[language].contact.contentli1}</li>) : (<p>Loading data...</p>)}
                    {data ? (<li>{data[language].contact.contentli2}</li>) : (<p>Loading data...</p>)}
                    {data ? (<li>{data[language].contact.contentli3}</li>) : (<p>Loading data...</p>)}
                </ul>
                    {data ? (<h3>{data[language].contact.tittle2}</h3>) : (<p>Loading data...</p>)}
                <ul>
                    {data ? (<li>{data[language].contact.contentli4}</li>) : (<p>Loading data...</p>)}
                </ul>
            </div>
            <div className='mail'>
            {data ? (<h3>{data[language].contact.contact}</h3>) : (<p>Loading data...</p>)}
                <CopyToClipboard text="pro.guillaume.picard@gmail.com">
                    <a href="#" >Pro.Guillaume.Picard@gmail.com <img src={Copy} alt="copier l'email" /></a>
                </CopyToClipboard>
                {data ? (<p>{data[language].contact.location}</p>) : (<p>Loading data...</p>)}
            </div>
        </div>
    );
}
