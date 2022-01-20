import './checkOutPage.styles.scss';

import { useSelector } from 'react-redux';

import CheckOutItem from '../../components/checkout/checkOutItem';

const CheckOutPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const checkItems = cartItems.map(item => {
        return <CheckOutItem key={item.id} data={item}/>
    })
    
    return (
        <div className='checkout'>
            {checkItems}
        </div>
    )
}

export default CheckOutPage;