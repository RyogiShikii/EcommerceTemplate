import {SignInAndUpContainer} from './signinandup.styles.jsx';
import SignIn from '../../components/sign-in/signIn';
import SignUp from '../../components/sign-up/signUp';

const SignInAndOut = () => {
    return (
        <SignInAndUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndUpContainer>
    )
}

export default SignInAndOut;