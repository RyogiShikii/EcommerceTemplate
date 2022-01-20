import './checkOutItem.styles.scss';
import { useDispatch } from 'react-redux';
import { addItem, decreaseItem, removeAllItems } from '../../store/cartSlice';

const CheckOutItem = (props) => {
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addItem({
            id: props.data.id,
            title:props.data.name,
            price:props.data.price,
            imageUrl:props.data.imageUrl
        }));
    }

    const handleDecrease = () => {
        dispatch(decreaseItem(props.data.id))
    }

    const removeAll = () => {
        dispatch(removeAllItems(props.data.id));
    }
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={props.data.imageUrl} alt="" />
            </div>
            <span className='name'>{props.data.title}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleDecrease}>
                    &#10094;
                </div>
                <span className='value'>{props.data.quantity}</span>
                <div className='arrow' onClick={handleAdd}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{props.data.price}</span>
            <div className='remove-button' onClick={removeAll}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckOutItem;