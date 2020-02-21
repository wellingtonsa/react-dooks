import styled from 'styled-components';
import { Link }  from 'react-router-dom';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        color: #00d455ff;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const Button = styled(Link)`

    width: 320px;
    height: 50px;
    border: 0;
    border-radius: 50px;
    background: #00d455ff;
    margin: 5px 0px;
    outline: none;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    :hover{
        background: #00d400ff;
    }
`;