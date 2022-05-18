import { useState } from 'react';
import { createUserProfileDocument, createAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils';

import CustomButton from '../customButton/CustomButton';
import FormInput from '../form-input/formInput';
import {SignupContainer} from './signup.styles.jsx';

const formInitial = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUp = () => {
    const [formInput, setFormInput] = useState(formInitial);
    const {displayName, email, password, confirmPassword} = formInput;

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormInput({...formInput, [name]: value})
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try {
            const user = await createAuthUserWithEmailAndPassword(email, password);
            //console.log(user);
            //console.log(user.user);

            await createUserProfileDocument(user.user,{displayName});

            setFormInput(formInitial);
        } catch (error) {
            console.log('signUp went wrong',error)
        }
    }
    
    return (
        <SignupContainer>
            <h2>Sign Up</h2>
            <span>I do not have an account</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    name='displayName'
                    type='text'
                    value={displayName}
                    label='displayName'
                    handleChange={changeHandler}
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='email'
                    handleChange={changeHandler}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label='password'
                    handleChange={changeHandler}
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    label='confirmPassword'
                    handleChange={changeHandler}
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </SignupContainer>
    )
}

export default SignUp;