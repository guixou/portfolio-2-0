import Home from './home';
import Contact from './contact';
import '../styles/content.css';
import {Routes, Route} from "react-router-dom"

function Content() {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export default Content;