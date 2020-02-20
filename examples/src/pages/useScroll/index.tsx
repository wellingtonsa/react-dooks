import React from 'react';
import * as S from './index.styles';
import {  } from '../../../src';
interface Props  {}

const useScroll:React.SFC<Props> = () => (
    <S.Container>
        <S.Parallax>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax0.png"} alt=""/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax1.png"} alt=""/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax2.png"} alt=""/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax3.png"} alt=""/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax4.png"} alt=""/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax5.png"} alt=""/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax6.png"} alt=""/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax7.png"} alt=""/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax8.png"} alt=""/>
        </S.Parallax>
    </S.Container>
);

export default useScroll;
