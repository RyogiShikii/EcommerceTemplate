import './header.styles.scss';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/cartSlice';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/cartDropdown';

import { getAuth } from 'firebase/auth';

const Header = ({currentUser}) => {
    const auth = getAuth();
    const isCartShow = useSelector(state => state.cart.isCartShow);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const toggleButton = () => {
        dispatch(toggleCart());
    }
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
                <CartIcon onClick={toggleButton} totalQuantity={totalQuantity}/>
            </div>
            {isCartShow && <CartDropdown />}
        </div>
    )
}

export default Header;