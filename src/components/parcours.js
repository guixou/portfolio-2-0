import React, {useContext} from 'react';
import ReactImg from '../assets/images/parcour/reactImg.jpg';
import WaImg from '../assets/images/parcour/3WAImg.jpg';
import BtsImg from '../assets/images/parcour/BTSImg.jpg';
import ValeoImg from '../assets/images/parcour/ValeoImg.jpg';
// import EnedisImg from '../assets/images/parcour/EnedisImg.jpg';
import '../styles/parcours.css'
import { LanguageValue } from '../context/LanguageValue';
import { DataLanguage } from '../context/DataLanguage';

export default function Parcours() {
    
    const {language} = useContext(LanguageValue);
    const {data} = useContext(DataLanguage);

    return (
        <div className='parcours'> 
            {data ? (<h3>{data[language].parcours.title}</h3>) : (<p>Loading data...</p>)}
            <div className='tree'>
                <section>
                    <div className='react'>
                        <img src={ReactImg} alt="logo react" />
                        <div className='description'>
                            <h4>2021-2022 </h4>
                            {data ? (<h4>{data[language].parcours.détail.react.title1}</h4>) : (<p>Loading data...</p>)}
                            {data ? (<h4>{data[language].parcours.détail.react.title2}</h4>) : (<p>Loading data...</p>)}

                            {data ? (<h4>{data[language].parcours.détail.react.title2}</h4>) : (<p>Loading data...</p>)}
                            <p>Apprentissage de Figma pour la Conception d'Interface Utilisateur et divers outils qui m'ont permis de réaliser mon portfolio</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='WA'>
                        <img src={WaImg} alt="image d'un bureau" />
                        <div className='description'>
                            <h4>
                                2021 <br/>
                                Formation : <br/>
                                3WAcademy
                            </h4>

                            <p>Base du developpement web HTML/CSS/JS/PHP/SQL. Réalisation de divers projets ainsi qu'un projet complet comprenant tous ces langages</p>
                            <p>Obtention de mon diplôme de Développeur Intégrateur en réalisation d’applications Web</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='BTS'>
                        <img src={BtsImg} alt="image représentant une salle de cours" />
                        <div className='description'>
                            <h4>
                                2018-2020 <br/>
                                BTS Assistant Technique d'Ingénieur <br/>
                                Formation au métier de technicien process
                            </h4>
                            <p>Obtention de mon BTS ATI à la suite ce celui-ci</p>
                            <p>Formation aux automates industriels, conception 3D et à l'amélioration continue au sein d'une usine</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='Valeo'>
                        <img src={ValeoImg} alt="image représentant deux ingénieur" />
                        <div className='description'>
                            <h4>
                                2018-2020 <br/>
                                Alternance chez Valeo Sablé-Sur-Sarthe <br/>
                                Apprentissage du métier de technicien process
                            </h4>
                            <p>Acquisition du savoir-étre en entreprise, démarche 5S, fonctionnement d'une entreprise internationale</p>
                            <p>Réalisation de devis, documentation technique, divers améliorations continues en totale autonomie</p>
                        </div>
                    </div>
                </section>
                <div className='next'>
                    
                </div>
            </div>
        </div>
    );
}