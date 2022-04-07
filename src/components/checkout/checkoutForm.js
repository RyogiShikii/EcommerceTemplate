import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './checkoutForm.style.scss';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    console.log(stripe)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if( !stripe || !elements ){
            return;
        }

        const result = await elements.getElement('CardElement')

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
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Pay Now</button>
        </form>
    )
}

export default CheckoutForm;