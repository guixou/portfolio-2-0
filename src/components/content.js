import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Cv from "./Cv";
import Parcours from './Parcours';
import Portfolio from './Portfolio';
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
                <Route path='/portfolio/' element={<Portfolio />} />
            </Routes>
        </div>
    );
}