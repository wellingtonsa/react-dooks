import React from 'react';
import * as S from './index.styles';

interface Props {

}

const Home:React.SFC<Props> = () =>{


    return(
    <S.Container>
        <S.Header>
            <img src="https://i.imgur.com/WmjL1dF.gif" alt="Logo"/>
            <span>Here, we've some examples using the React Dooks libraby :)</span>
        </S.Header>
        <S.Menu>
            <S.Button to="/useScroll">useScroll</S.Button>
            <S.Button to="/useWindowSize">useWindowSize</S.Button>
        </S.Menu>
    </S.Container>)
};

export default Home;
