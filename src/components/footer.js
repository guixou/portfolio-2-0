import Arrow from '../assets/svg/arrowLangue.svg';
import C from '../assets/svg/copyright.svg'
import '../styles/footer.css'

export default function Footer () {
    return (
        <div className='footer'>
            <div className='language'>
                <p className='selectLanguage'>Français</p>
                <img src={Arrow} alt="menue déroulant" />
            </div>

            <div className='copyright'>
                <p>Tous droits réservés Guix</p>
                <img src={C} alt="copyright" />
            </div>
        </div>
    )
}