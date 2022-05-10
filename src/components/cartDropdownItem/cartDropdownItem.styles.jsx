import styled from 'styled-components';

export const CartItemContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    margin-bottom: 15px;

    img {
        width: 30%;
    }
`

export const CartItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    span {
        font-size: 16px;
    }
`
export const ItemQuantity = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

/*
.cart-item {
    display: flex;
    width: 100%;
    height: 80px;
    margin-bottom: 15px;

    img {
        width: 30%;
    }

    .item-details {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px 20px;

        .name {
            font-size: 16px;
        }

        .quantity {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
}
*/
