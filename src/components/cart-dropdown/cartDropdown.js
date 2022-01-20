import './cartDropdown.styles.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CartDropdownItem from '../cartDropdownItem/cartDropdownItem';

import CustomButton from '../customButton/CustomButton';

const CartDropdown = () => {
    const cartItems = useSelector(state => state.cart.items);
    const items = cartItems.map(item => {
        return <CartDropdownItem key={item.id} data={item} />
    });
    const history = useHistory();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {items}
            </div>
            <CustomButton
                onClick = {() => {history.push('/checkout')}}
            >
                Check Out
            </CustomButton>
        </div>
    )
}

export default CartDropdown;

//may use withRouter hook to get history obj directly