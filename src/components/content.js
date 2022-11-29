import Home from './home';
import Contact from './contact';
import Cv from './cv'
import Parcours from './parcours';
import '../styles/content.css';
import {Routes, Route} from "react-router-dom"

function Content() {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cv' element={<Cv />} />
                <Route path='/parcour' element={<Parcours />} />
            </Routes>
        </div>
    );
}

export default Content;