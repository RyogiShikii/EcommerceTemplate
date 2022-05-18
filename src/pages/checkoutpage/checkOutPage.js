import {CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total, EmptyCart} from './checkOutPage.styles.jsx';

import { useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import CheckOutItem from '../../components/checkout/checkOutItem';

const CheckOutPage = () => {
    const elements = useElements();
    const stripe = useStripe();
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return
        }

        const cardElement = elements.getElement(CardElement);
        console.log('card',cardElement);
        console.log('stripe',stripe);

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
              return_url: "http://localhost:3000",
            },
          });
      
          if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
          } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
          }
    }
    
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
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit">pay</button>
            </form>
        </CheckoutPageContainer>
    )
}

export default CheckOutPage;