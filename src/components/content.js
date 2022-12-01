import React from 'react';
import Home from './home';
import Contact from './contact';
import Cv from './cv'
import Parcours from './parcours';
import Portfolio from './portfolio';
import LeLocal from './creation/leLocal';
import Rafal from './creation/rafale';
import TrainingStudio from './creation/trainingStudio';
import CapiCrea from './creation/capiCrea';
import MontBlanc from './creation/montBlanc';
import '../styles/content.css';
import {Routes, Route} from "react-router-dom"

function Content() {
    return(
        <div>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cv' element={<Cv />} />
                <Route path='/parcour' element={<Parcours />} />
                <Route path='/portfolio/' element={<Portfolio />}>
                    <Route path='/portfolio/leLocal' element={<LeLocal/>}/>
                    <Route path='/portfolio/rafale' element={<Rafal/>}/>
                    <Route path='/portfolio/trainingStudio' element={<TrainingStudio/>}/>
                    <Route path='/portfolio/capiCrea' element={<CapiCrea/>}/>
                    <Route path='/portfolio/montBlanc' element={<MontBlanc/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default Content;