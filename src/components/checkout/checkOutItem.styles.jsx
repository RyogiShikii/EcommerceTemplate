import styled from 'styled-components';

export const ArrowContainer = styled.div`

`

export const ValueContainer = styled.span`

`
export const NameContainer = styled.span`

`

export const QuantityContainer = styled.span`

`

export const PriceContainer = styled.span`

`

export const RemoveButton = styled.div`

`

export const ImageContainer = styled.div`
`

export const CheckoutContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 32px;
    min-height: 100px;
    border-bottom: 1px solid darkgray;
    padding:15px 0;

    ${ImageContainer} {
        width: 23%;
        padding-right: 15px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    ${NameContainer} {
        width: 23%;
    }

    ${QuantityContainer} {
        width: 23%;
        display: flex;
        ${ArrowContainer} {
            cursor: pointer;
        }
        ${ValueContainer} {
            margin: 0 10px;
        }
    }

    ${PriceContainer} {
        width:23%;
    }

    ${RemoveButton} {
        cursor: pointer;
        padding-left: 12px;
    }
`
/*
.checkout-item {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 32px;
    min-height: 100px;
    border-bottom: 1px solid darkgray;
    padding:15px 0;

    .image-container {
        width: 23%;
        padding-right: 15px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .name{
        width: 23%;
    }

    .quantity {
        width: 23%;
        display: flex;

        .arrow {
            cursor: pointer;
        }

        .value {
            margin: 0 10px;
        }
    }

    .price {
        width: 23%;
    }

    .remove-button {
        cursor: pointer;
        padding-left: 12px;
    }
}
*/