import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/cartDropdown';

import { getAuth } from '@firebase/auth';

const Header = ({currentUser}) => {
    const auth = getAuth();
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {currentUser? 
                    <div className='option' onClick={()=>{auth.signOut()}}>SIGN OUT</div> :
                    <Link className='option' to='/signin'>Sign In</Link>
                }
                <CartIcon />
            </div>
            <CartDropdown />
        </div>
    )
}

export default Header;