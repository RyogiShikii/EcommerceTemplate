import './signinandup.styles.scss';
import SignIn from '../../components/sign-in/signIn';
import SignUp from '../../components/sign-up/signUp';

const SignInAndOut = () => {
    return (
        <div className='sign-in-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndOut;