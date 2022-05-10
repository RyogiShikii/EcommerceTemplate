import { addItem, decreaseItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

import {CartItemContainer, CartItemDetails, ItemQuantity} from './cartDropdownItem.styles.jsx';

const CartDropdownItem = (props) => {
    const dispatch = useDispatch();
    const addItemHandler = () => {
        dispatch(addItem({
            id:props.data.id,
            title:props.data.title,
            price:props.data.price,
            imageUrl:props.data.imageUrl
        }))
    }

    const decreaseItemHandler = () => {
        dispatch(decreaseItem(props.data.id));
    }
    
    return (
        <CartItemContainer>
            <img src={props.data.imageUrl} alt="item" />
            <CartItemDetails>
                <span className='name'>{props.data.title}</span>
                <ItemQuantity>
                    <button onClick={decreaseItemHandler}>-</button>
                    <span>{props.data.quantity}</span>
                    <button onClick={addItemHandler}>+</button>
                </ItemQuantity>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartDropdownItem;