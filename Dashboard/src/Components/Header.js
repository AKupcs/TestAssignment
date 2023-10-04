import '../Assets/Styles/Header.css';
import LogoImg from '../Assets/Images/logo.png';
import BurgerMenu from '../Assets/Images/burgerMenu.png';

function Header() {
    return(
        <div className='header'>
            <img src={BurgerMenu} className='header_burgerMenu' alt='menu'/>
            <div className='header_logoContainer'>
                <img className='header_logo' src={LogoImg} alt='logo'/>
            </div>
            <div className='header_title'>Dashboard</div>
        </div>
    );
}

export default Header