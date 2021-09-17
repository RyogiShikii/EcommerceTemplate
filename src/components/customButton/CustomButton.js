import './custombutton.styles.scss';

const CustomButton = (props) => {
    return (
        <button className='custom-button' {...props}>
            {props.children}
        </button>
    )
}

export default CustomButton;