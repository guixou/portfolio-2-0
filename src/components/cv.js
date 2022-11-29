import Download from '../assets/svg/download.svg';
import "../styles/cv.css"

function cv() {
    return (
        <div className='cv'>
            <a href="">Télécharger <img src={Download} alt="" /></a>
            <a href="">Voir en ligne</a>
        </div>
    );
}

export default cv;