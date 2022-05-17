import {HeaderContainer, LogoContainer, OptionContainer, OptionsContainer, OptionLink} from './header.styles.jsx';
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
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser? 
                    <OptionContainer onClick={()=>{auth.signOut()}}>SIGN OUT</OptionContainer> :
                    <OptionLink to='/signin'>Sign In</OptionLink>
                }
                <CartIcon onClick={toggleButton} totalQuantity={totalQuantity}/>
            </OptionsContainer>
            {isCartShow && <CartDropdown />}
        </HeaderContainer>
    )
}

export default Header;