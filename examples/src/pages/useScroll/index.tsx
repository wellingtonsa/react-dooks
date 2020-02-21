import React from 'react';
import { interpolate } from '../dist/util';
import * as S from './index.styles';
import { useScroll } from '../dist';
interface Props  {}

const useScrollExample:React.SFC<Props> = () => {
    const effect = useScroll();
    return(
    <S.Container>
        <S.Parallax>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax0.png"} alt="" effect={interpolate(effect, [0, 3000])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax1.png"} alt="" effect={interpolate(effect, [0, 2750])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax2.png"} alt="" effect={interpolate(effect, [0, 2500])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax3.png"} alt="" effect={interpolate(effect, [0, 2250])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax4.png"} alt="" effect={interpolate(effect, [0, 2000])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax5.png"} alt="" effect={interpolate(effect, [0, 1750])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax6.png"} alt="" effect={interpolate(effect, [0, 1500])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax7.png"} alt="" effect={interpolate(effect, [0,1000])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax8.png"} alt="" effect={interpolate(effect, [0, 0])}/>
        </S.Parallax>
        <S.Content></S.Content>
    </S.Container>)
};

export default useScrollExample;
