import './collectionItem.styles.scss';
import { addItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const CollectionItem = (props) => {
    const dispatch = useDispatch();
    const addItemHandler = () => {
        dispatch(addItem({
            id: props.id,
            title:props.name,
            price:props.price
        }));
    }

    return (
        <div className='collection-item' onClick={addItemHandler}>
            <div
                className='image'
                style={{backgroundImage:`url(${props.imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;