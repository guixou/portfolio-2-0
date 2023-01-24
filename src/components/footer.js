import Arrow from '../assets/svg/arrowLangue.svg';
import C from '../assets/svg/copyright.svg'
import '../styles/footer.css'
import React, { useState, useEffect } from 'react';



export default function Footer () {


    // charger/utiliser mon Json
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('data.json');
          const json = await response.json();
          setData(json);
        }
        fetchData();
      }, []);

    //menue de langue
        const [selectedLanguage, setSelectedLanguage] = useState('Français');
      
        const handleLanguageChange = (event) => {
          setSelectedLanguage(event.target.value);
        };


    return (
        <React.Fragment>
            <div className='footer'>
                <div className='language'>
                    <label>
                        <select value={selectedLanguage} onChange={handleLanguageChange}>
                            <option className='selectLanguage' value="Français">Français</option>
                            <option className='selectLanguage' value="English">English</option>
                        </select>
                    </label>
                    {data ? (
                            <p>{data[selectedLanguage].footer.language}</p>
                        ) : (
                            <p>Loading data...</p>
                        )
                    }
                </div>

                <div className='copyright'>
                    {data ? (
                            <p>{data[selectedLanguage].footer.copyright}</p>
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