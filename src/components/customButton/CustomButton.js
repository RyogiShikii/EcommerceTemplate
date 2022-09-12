import {BaseButton, GoogleButton, InvertedButton, ButtonSpinner} from './custombutton.styles.jsx';

const BUTTON_TYPES = {
    base: 'base',
    google: 'google-signin',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPES.base) => {
    if(buttonType === 'google'){
        return GoogleButton;
    }else if(buttonType === 'inverted'){
        return InvertedButton;
    }
    return BaseButton;
}

const CustomButton = ({children, buttonType, isLoading=false, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading? <ButtonSpinner /> : children}
        </CustomButton>
    )
}

export default CustomButton;