import React from 'react';
import ReactImg from '../assets/images/parcour/reactImg.jpg';
import '../styles/parcours.css'

function parcours() {
    return (
        <div className='parcours'> 
            <h3>Mon parcours</h3>
            <div className='tree'>
                <section>
                    <div className='react'>
                        <h4>
                            2021-2022 <br/>
                            Foramtion : <br/>
                            ReactJs et conception d'interface utilisateur
                        </h4>

                        <p>Apprentissage du framwork React sur Openclassroom en autodidacte, utilisation de useState useEffect et de react-router-dom</p>
                        <p>Apprentssage de Figma pour la conception d'interface utilisateur et divers outils qui men entre autre permis de réaliser mon portfolio</p>
                    </div>
                </section>
                <section>
                    <div className='WA'>
                        <h4>
                            2021 <br/>
                            Foramtion : <br/>
                            3WAcademy
                        </h4>

                        <p>Base du devloppement web HTML CSS JS PHP SQL réalisation de divers projet ainsi d'un projet complet comprenant tout ses languages</p>
                        <p>Obtention de mon diplode de Développeur intégrateur en réalisation d’applications web</p>
                    </div>
                </section>
                <section>
                    <div className='BTS'>
                        <h4>
                            2018-2020 <br/>
                            BTS Assistan Technique d'Ingénieur <br/>
                            Formation au métier de technicien process
                        </h4>
                        <p>Optention de mon BTS ATI a la suite ce celui ci</p>
                        <p>Formation au atomate industrielle, conception 3D et à l'amélioration continue au saint d'une usine</p>
                    </div>
                </section>
                <section>
                    <div className='Valeo'>
                        <h4>
                            2018-2020 <br/>
                            Alternance chez Valeo sablé-sur-sarthe <br/>
                            apprentissage du métier de technicien process
                        </h4>
                        <p>Aquésition du savoir étre en entreprise, démarche 5S, fonctionnement d'une entreprise internationale</p>
                        <p>Réalisation de devis, docomentation technique, divers amélioration continue en total autonomie</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default parcours;