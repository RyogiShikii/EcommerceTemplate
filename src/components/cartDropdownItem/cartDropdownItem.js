import { addItem, decreaseItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

import './cartDropdownItem.styles.scss';

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
        <div className='cart-item'>
            <img src={props.data.imageUrl} alt="item" />
            <div className='item-details'>
                <span className='name'>{props.data.title}</span>
                <div className='quantity'>
                    <button onClick={decreaseItemHandler}>-</button>
                    <span>{props.data.quantity}</span>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartDropdownItem;