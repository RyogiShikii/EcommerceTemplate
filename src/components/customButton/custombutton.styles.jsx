import styled from 'styled-components';

export const BaseButton = styled.button`
    min-width: 130px;
    width: auto;
    height: 50px;
    cursor: pointer;

    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

export const GoogleButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
}
`

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
        background-color: black;
        color: white;
        border:none;
    }
`

/*
.custom-button {
    min-width: 130px;
    width: auto;
    height: 50px;
    cursor: pointer;

    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    &.google-signin {
        background-color: #4285f4;
        color: white;

        &:hover {
            background-color: #357ae8;
            border: none;
        }
    }

    &.inverted {
        background-color: white;
        color: black;
        border: 1px solid black;

        &:hover{
            background-color: black;
            color: white;
            border:none;
        }
    }
}
*/