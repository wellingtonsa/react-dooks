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

`;

export const Image = styled.img<{ effect: any }>`
    position: absolute;
    top: ${({ effect }) => `${effect}px`}
    
`;

export const Content = styled.div`
    height: 3000px;
    width: 100%;
`;