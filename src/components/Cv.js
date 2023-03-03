import Download from '../assets/svg/download.svg';
import "../styles/cv.css"
import Cvpdf from '../assets/pdf/cv.pdf'

export default function Cv() {
    return (
        <div className='cv'>
            <a href={Cvpdf} download="Cv Guillaume Picard">Télécharger <img src={Download} alt="Télécharger mon CV" /></a>
            <a href={Cvpdf} target = "noopener">Voir en ligne</a>
        </div>
    );
}
