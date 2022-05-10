import styled from 'styled-components';
import CustomButton from '../customButton/CustomButton';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${CustomButton} {
    margin-top: auto;
  }
`

export const CartItem = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const CartSpan = styled.span`
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding-top: 10px;
`