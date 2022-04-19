import './custombutton.styles.scss';

const BUTTON_TYPES = {
    google: 'google-signin',
    inverted: 'inverted'
}

const CustomButton = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`custom-button ${BUTTON_TYPES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;