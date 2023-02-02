import Download from '../assets/svg/download.svg';
import "../styles/cv.css"
import Cvpdf from '../assets/pdf/cv.pdf'

export default function Cv() {
    return (
        <div className='cv'>
            <a href="CV.pdf" download={Cvpdf}>Télécharger <img src={Download} alt="Télécharger mon CV" /></a>
            <a href={Cvpdf} target = "_blank">Voir en ligne</a>
        </div>
    );
}
