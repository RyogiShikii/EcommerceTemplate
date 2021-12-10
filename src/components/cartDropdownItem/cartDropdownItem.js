import './cartDropdownItem.styles.scss';

const cartDropdownItem = (props) => {
    return (
        <div className='cart-item'>
            <div>{props.data.title}</div>
            <button>+</button>
            <div>{props.data.quantity}</div>
            <button>-</button>
            <div>{props.data.totalAmount}</div>
        </div>
    )
}

export default cartDropdownItem;