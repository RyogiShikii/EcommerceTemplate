import {CartIconContainer} from './cart-icon.styles.jsx';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const cartIcon = (props) => {
    return (
        <CartIconContainer onClick={props.onClick}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{props.totalQuantity}</span>
        </CartIconContainer>
    )
}

export default cartIcon;