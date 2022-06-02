import {SignInContainer, ButtonsContainer} from './signin.styles.jsx';
import {useState} from 'react';
import {signInWithGoogle, userSignInWithEmailAndPassword} from '../../firebase/firebase.utils';
import { useHistory } from 'react-router';
import FormInput from '../form-input/formInput';
import CustomButton from '../customButton/CustomButton';

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    const handlerChange = (e) => {
        const {name, value} = e.target;
        if(name==='email'){
            setEmail(value)
        }else if(name==='password'){
            setPassword(value)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await userSignInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
            if(response){
                history.push('/')
            }
        } catch (error) {
            console.log('error with sign in', error);  
        }
    }

    return (
        <SignInContainer>
            <h2>Sign In</h2>
            <span>I already have an account</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='email'
                    handleChange={handlerChange}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label='password'
                    handleChange={handlerChange}
                    required
                />
                <ButtonsContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} buttonType='google'>Sign In With Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn;