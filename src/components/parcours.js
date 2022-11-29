import React from 'react';
import ReactImg from '../assets/images/parcour/reactImg.jpg';
import WaImg from '../assets/images/parcour/3WAImg.jpg';
import BtsImg from '../assets/images/parcour/BTSImg.jpg';
import ValeoImg from '../assets/images/parcour/ValeoImg.jpg';
import EnedisImg from '../assets/images/parcour/EnedisImg.jpg';
import '../styles/parcours.css'

function parcours() {
    return (
        <div className='parcours'> 
            <h3>Mon parcours</h3>
            <div className='tree'>
                <section>
                    <div className='react'>
                        <img src={ReactImg} alt="logo react" />
                        <div className='description'>
                            <h4>
                                2021-2022 <br/>
                                Formation : <br/>
                                ReactJs et conception d'interface utilisateur
                            </h4>

                            <p>Apprentissage du framwork React sur Openclassroom en autodidacte, utilisation de useState useEffect et de react-router-dom</p>
                            <p>Apprentssage de Figma pour la conception d'interface utilisateur et divers outils qui men entre autre permis de réaliser mon portfolio</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='WA'>
                        <img src={WaImg} alt="bureau" />
                        <div className='description'>
                            <h4>
                                2021 <br/>
                                Formation : <br/>
                                3WAcademy
                            </h4>

                            <p>Base du devloppement web HTML CSS JS PHP SQL réalisation de divers projet ainsi d'un projet complet comprenant tout ses languages</p>
                            <p>Obtention de mon diplode de Développeur intégrateur en réalisation d’applications web</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='BTS'>
                        <img src={BtsImg} alt="salle de cours" />
                        <div className='description'>
                            <h4>
                                2018-2020 <br/>
                                BTS Assistan Technique d'Ingénieur <br/>
                                Formation au métier de technicien process
                            </h4>
                            <p>Optention de mon BTS ATI a la suite ce celui ci</p>
                            <p>Formation au atomate industrielle, conception 3D et à l'amélioration continue au saint d'une usine</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='Valeo'>
                        <img src={ValeoImg} alt="deux ingénieur" />
                        <div className='description'>
                            <h4>
                                2018-2020 <br/>
                                Alternance chez Valeo sablé-sur-sarthe <br/>
                                apprentissage du métier de technicien process
                            </h4>
                            <p>Aquésition du savoir étre en entreprise, démarche 5S, fonctionnement d'une entreprise internationale</p>
                            <p>Réalisation de devis, docomentation technique, divers amélioration continue en total autonomie</p>
                        </div>
                    </div>
                </section>
                <div className='next'>
                    
                </div>
            </div>
        </div>
    );
}

export default parcours;