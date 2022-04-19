import './collectionItem.styles.scss';
import { addItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import CustomButton from '../customButton/CustomButton';

const CollectionItem = (props) => {
    const dispatch = useDispatch();
    const addItemHandler = () => {
        dispatch(addItem({
            id: props.id,
            title:props.name,
            price:props.price,
            imageUrl:props.imageUrl
        }));
    }

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage:`url(${props.imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
            <CustomButton buttonType='inverted' onClick={addItemHandler}>Add To Cart</CustomButton>
        </div>
    )
}

export default CollectionItem;