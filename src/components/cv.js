import Download from '../assets/svg/download.svg';
import "../styles/cv.css"
import Cv from '../assets/pdf/cv.pdf'

function cv() {
    return (
        <div className='cv'>
            <a href="CV.pdf" download={Cv}>Télécharger <img src={Download} alt="Télécharger mon CV" /></a>
            <a href={Cv} target = "_blank">Voir en ligne</a>
        </div>
    );
}

export default cv;