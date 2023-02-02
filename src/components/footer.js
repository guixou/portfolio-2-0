import C from '../assets/svg/copyright.svg'
import '../styles/footer.css'
import React, { useContext } from 'react';
import { LanguageValue } from '../context/LanguageValue';
import { DataLanguage } from '../context/DataLanguage';


export default function Footer () {



    //import du context

    const {toggleLanguage, language} = useContext(LanguageValue);

    const {data} = useContext(DataLanguage)

    return (
        <React.Fragment>
            <div className='footer'>

                <div className='language'>

                    <button onClick={toggleLanguage}>{language}</button>
                    
                    {data ? (
                            <p>{data[language].footer.language}</p>
                        ) : (
                            <p>Loading data...</p>
                        )
                    }
                </div>

                <div className='copyright'>
                    
                    {data ? (
                            <p>{data[language].footer.copyright}</p>
                        ) : (
                            <p>Loading data...</p>
                        )
                    }
                    <img src={C} alt="copyright" />
                </div>
            </div>
        </React.Fragment>
    )
}