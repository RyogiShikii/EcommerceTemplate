import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const cartIcon = () => {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default cartIcon;