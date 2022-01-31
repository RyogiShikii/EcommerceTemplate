import './checkOutPage.styles.scss';

import { useSelector } from 'react-redux';

import CheckOutItem from '../../components/checkout/checkOutItem';

const CheckOutPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const checkItems = cartItems.map(item => {
        return <CheckOutItem key={item.id} data={item}/>
    })
    const totalAmount = cartItems.reduce((startAmount, item) => {
        return startAmount + item.totalAmount
    },0)
    
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {checkItems}
            <div className='total'>
                Total: {totalAmount}
            </div>
        </div>
    )
}

export default CheckOutPage;