import React from 'react';
import * as S from './index.styles';

interface Props {

}

const Home:React.SFC<Props> = () =>(
    <S.Container>
        <S.Header>
            <img src="https://i.imgur.com/WmjL1dF.gif" alt="Logo"/>
            <span>Here, we've some examples using the React Dooks libraby :)</span>
        </S.Header>
        <S.Menu>
            <button>useScroll</button>
            <button>useWindowSize</button>
        </S.Menu>
    </S.Container>
);

export default Home;
