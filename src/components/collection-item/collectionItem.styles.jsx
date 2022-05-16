import styled from 'styled-components';

export const ItemImage = styled.div`
    width: 100%;
    height: 95%;
    background-position: center;
    background-size: cover;
    margin-bottom: 5px;
    background-image: url(${props => props.backgroundImg})
`

export const CollectionItemnContainer = styled.div`
    width: 22vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:hover {
        ${ItemImage} {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: block;
        }
    }

    button {
        width: 80%;
        opacity: 0.8;
        position: absolute;
        top:255px;
        display: none;
    }
`

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const ItemName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const ItemPrice = styled.span`
    width: 10%;
`
/*
.collection-item {
    width: 22vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .image {
        width: 100%;
        height: 95%;
        background-position: center;
        background-size: cover;
        margin-bottom: 5px;
    }

    &:hover {
        .image {
            opacity: 0.8;
        }

        .custom-button {
            opacity: 0.85;
            display: block;
        }
    }

    .custom-button {
        width: 80%;
        opacity: 0.8;
        position: absolute;
        top:255px;
        display: none;
    }

    .collection-footer {
        width: 100%;
        height: 5%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
    }

    .name {
        width: 90%;
        margin-bottom: 15px;
    }

    .price {
        width: 10%;
    }
}
*/