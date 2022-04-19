import './signin.styles.scss';
import {useState} from 'react';
import {signInWithGoogle, userSignInWithEmailAndPassword} from '../../firebase/firebase.utils';

import FormInput from '../form-input/formInput';
import CustomButton from '../customButton/CustomButton';

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handlerChange = ({value,name}) => {
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
        } catch (error) {
            console.log('error with sign in', error);  
        }
    }

    return (
        <div className='sign-in'>
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
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isgooglesignin>Sign In With Google</CustomButton>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn;