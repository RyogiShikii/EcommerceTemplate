import './cartDropdown.styles.scss';
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
        items = <span>No items in your cart</span>
    }else{
        items = cartItems.map(item => {
            return <CartDropdownItem key={item.id} data={item} />
        });
    }
    const history = useHistory();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {items}
            </div>
            <CustomButton
                onClick = {() => {
                    history.push('/checkout');
                    dispatch(toggleCart());
                }}
            >
                Check Out
            </CustomButton>
        </div>
    )
}

export default CartDropdown;

//may use withRouter hook to get history obj directly