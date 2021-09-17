import './signin.styles.scss';
import {useState} from 'react';

import FormInput from '../form-input/formInput';
import CustomButton from '../customButton/CustomButton';

import {signInWithGoogle} from '../../firebase/firebase.utils';

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

    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
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
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
            </form>
        </div>
    )
}

export default SignIn;