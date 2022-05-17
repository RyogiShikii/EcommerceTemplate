import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    font-size: 2.25rem;
    cursor: pointer;
`

export const OptionContainer = styled.div`
    padding: 10px 15px;
    font-size: 2.25rem;
    cursor: pointer;
`