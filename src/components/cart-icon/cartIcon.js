import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const cartIcon = (props) => {
    return (
        <div className='cart-icon' onClick={props.onClick}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{props.totalQuantity}</span>
        </div>
    )
}

export default cartIcon;