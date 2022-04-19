import './checkOutPage.styles.scss';

import { useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import CheckOutItem from '../../components/checkout/checkOutItem';

const CheckOutPage = () => {
    const elements = useElements();
    const stripe = useStripe();
    const cartItems = useSelector(state => state.cart.items);
    let checkItems
    if(cartItems.length === 0){
        checkItems = <span className='empty-cart'>No items in your cart</span>
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
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit">pay</button>
            </form>
        </div>
    )
}

export default CheckOutPage;