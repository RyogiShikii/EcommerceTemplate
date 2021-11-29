import './cartDropdown.styles.scss';

import CustomButton from '../customButton/CustomButton';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>Check Out</CustomButton>
        </div>
    )
}

export default CartDropdown;