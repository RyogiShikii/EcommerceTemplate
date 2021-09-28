import './custombutton.styles.scss';

const CustomButton = (props) => {
    return (
        <button className={`${props.isgooglesignin? 'google-signin':''} custom-button`} {...props}>
            {props.children}
        </button>
    )
}

export default CustomButton;