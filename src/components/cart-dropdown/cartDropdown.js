import './cartDropdown.styles.scss';
import { useSelector } from 'react-redux';
import CartDropdownItem from '../cartDropdownItem/cartDropdownItem';

import CustomButton from '../customButton/CustomButton';

const CartDropdown = () => {
    const cartItems = useSelector(state => state.cart.items);
    const items = cartItems.map(item => {
        return <CartDropdownItem key={item.id} data={item} />
    })

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {items}
            </div>
            <CustomButton>Check Out</CustomButton>
        </div>
    )
}

export default CartDropdown;