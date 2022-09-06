import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import CustomButton from "../customButton/CustomButton";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const response = await fetch('/.netlify/functions/create-payments-intent',{
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({amount:1000})
        }).then(res => res.json());

        const clientSecret = response.paymentIntent;
        console.log(clientSecret)

        /*const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'test'
                }
            }
        });

        if(paymentResult.error){
            alert(paymentResult.error);
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('payment success')
            }
        }
        */
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <CustomButton buttonType='inverted'>Pay now</CustomButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;