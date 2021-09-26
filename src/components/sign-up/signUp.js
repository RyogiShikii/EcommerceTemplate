import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import CustomButton from '../customButton/CustomButton';
import FormInput from '../form-input/formInput';
import './signup.styles.scss';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const nameChangeHandler = ({value}) => {
        setDisplayName(value);
    }

    const emailChangeHandler = ({value}) => {
        setEmail(value);
    }

    const passwordChangeHandler = ({value}) => {
        setPassword(value);
    }

    const confirmPasswordChangeHandler = ({value}) => {
        setConfirmPassword(value);
    }
    
    const submitHandler = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try {
            const user = await createUserWithEmailAndPassword(Auth, email, password);
            //console.log(user);
            //console.log(user.user);

            await createUserProfileDocument(user.user,{displayName});

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.log('signUp went wrong',error)
        }
    }
    
    return (
        <div className='sign-up'>
            <h2>Sign Up</h2>
            <span>I do not have an account</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    name='displayName'
                    type='text'
                    value={displayName}
                    label='displayName'
                    handleChange={nameChangeHandler}
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='email'
                    handleChange={emailChangeHandler}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label='password'
                    handleChange={passwordChangeHandler}
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    label='confirmPassword'
                    handleChange={confirmPasswordChangeHandler}
                    required
                />
                <CustomButton type='submit'>Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;