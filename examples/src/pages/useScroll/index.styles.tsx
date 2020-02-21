import styled from 'styled-components';


export const Container = styled.div`
      background: #210002;
`;

export const Parallax = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 1000px;
    overflow: hidden;
    background: #ffaf00;

`;

export const Image = styled.img<{ effect: any }>`
    position: absolute;
    transform: ${({ effect }) => `translate3d(0px, ${effect}px, 0px)`};
    transition: 200ms;
    
`;

export const Content = styled.div`
    height: 3000px;
    width: 100%;
`;