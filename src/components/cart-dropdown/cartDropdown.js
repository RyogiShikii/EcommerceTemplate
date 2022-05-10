import {CartDropdownContainer, CartItem, CartSpan } from'./cartDropdown.styles.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import CartDropdownItem from '../cartDropdownItem/cartDropdownItem';
import { toggleCart } from '../../store/cartSlice';
import CustomButton from '../customButton/CustomButton';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    let items
    if(totalQuantity === 0 ){
        items = <CartSpan>No items in your cart</CartSpan>
    }else{
        items = cartItems.map(item => {
            return <CartDropdownItem key={item.id} data={item} />
        });
    }
    const history = useHistory();

    return (
        <CartDropdownContainer>
            <CartItem>
                {items}
            </CartItem>
            <CustomButton
                onClick = {() => {
                    history.push('/checkout');
                    dispatch(toggleCart());
                }}
            >
                Check Out
            </CustomButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown;

//may use withRouter hook to get history obj directly