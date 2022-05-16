import {CollectionItemnContainer, ItemImage, CollectionFooter, ItemName, ItemPrice} from './collectionItem.styles.jsx';
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
        <CollectionItemnContainer>
            <ItemImage backgroundImg={props.imageUrl}/>
            <CollectionFooter>
                <ItemName>{props.name}</ItemName>
                <ItemPrice>{props.price}</ItemPrice>
            </CollectionFooter>
            <CustomButton buttonType='inverted' onClick={addItemHandler}>Add To Cart</CustomButton>
        </CollectionItemnContainer>
    )
}

export default CollectionItem;