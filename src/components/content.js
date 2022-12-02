import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Cv from "./Cv";
import Parcours from './Parcours';
import Portfolio from './Portfolio';
import LeLocal from './creation/LeLocal';
import Rafal from './creation/Rafale';
import TrainingStudio from './creation/TrainingStudio';
import CapiCrea from './creation/CapiCrea';
import MontBlanc from './creation/MontBlanc';
import '../styles/content.css';
import {Routes, Route} from "react-router-dom"

export default function Content() {
    return(
        <div>
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cv' element={<Cv />} />
                <Route path='/parcours' element={<Parcours />} />
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