import Arrow from '../assets/svg/arrowLangue.svg';
import C from '../assets/svg/copyright.svg'

function footer () {
    return (
        <div className='footer'>
            <div className='language'>
                <p className='selectLanguage'>Français</p>
                <img src={Arrow} alt="menue déroulant" />
            </div>

            <div className='copyright'>
                <p>Tout droit réservé Guix</p>
                <img src={C} alt="copyright" />
            </div>
        </div>
    )
}

export default footer