import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import CustomButton from "../customButton/CustomButton";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const items = useSelector(state => state.cart.items);
    const paymentAmount = items.reduce((startAmount, item) => {
        return startAmount + item.totalAmount
    },0);
    const currentUser = useSelector(state => state.user);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payments-intent',{
            method: 'post',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({amount:paymentAmount * 100})
        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser? currentUser.displayname : 'Guest'
                }
            }
        });

        setIsProcessingPayment(false);

        if(paymentResult.error){
            alert('something went wrong');
            console.log(paymentResult.error)
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('payment success')
            }
        }
        
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <CustomButton disabled={isProcessingPayment} buttonType='inverted'>Pay now</CustomButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;