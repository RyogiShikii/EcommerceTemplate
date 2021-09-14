import './signin.styles.scss';
import {useState} from 'react';

import FormInput from '../form-input/formInput';

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
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;