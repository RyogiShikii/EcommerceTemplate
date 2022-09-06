import {CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total, EmptyCart} from './checkOutPage.styles.jsx';

import { useSelector } from 'react-redux';

import CheckOutItem from '../../components/checkout/checkOutItem';
import PaymentForm from '../../components/payment-form/payment-form.js';

const CheckOutPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    let checkItems
    if(cartItems.length === 0){
        checkItems = <EmptyCart>No items in your cart</EmptyCart>
    }else{
        checkItems = cartItems.map(item => {
            return <CheckOutItem key={item.id} data={item}/>
        })
    }
    const totalAmount = cartItems.reduce((startAmount, item) => {
        return startAmount + item.totalAmount
    },0)
    
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {checkItems}
            <Total>
                Total: {totalAmount}
            </Total>
            <PaymentForm />
        </CheckoutPageContainer>
    )
}

export default CheckOutPage;