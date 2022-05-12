import {CheckoutContainer, ImageContainer, RemoveButton, PriceContainer, QuantityContainer, NameContainer, ValueContainer, ArrowContainer} from './checkOutItem.styles.jsx';
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
        <CheckoutContainer>
            <ImageContainer>
                <img src={props.data.imageUrl} alt="" />
            </ImageContainer>
            <NameContainer>{props.data.title}</NameContainer>
            <QuantityContainer>
                <ArrowContainer onClick={handleDecrease}>
                    &#10094;
                </ArrowContainer>
                <ValueContainer>{props.data.quantity}</ValueContainer>
                <ArrowContainer onClick={handleAdd}>
                    &#10095;
                </ArrowContainer>
            </QuantityContainer>
            <PriceContainer>{props.data.price}</PriceContainer>
            <RemoveButton onClick={removeAll}>
                &#10005;
            </RemoveButton>
        </CheckoutContainer>
    )
}

export default CheckOutItem;