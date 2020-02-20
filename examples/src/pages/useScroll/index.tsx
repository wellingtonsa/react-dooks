import React from 'react';
import { interpolate } from '../dist/util';
import * as S from './index.styles';
import { useScroll } from '../dist';
interface Props  {}

const useScrollExample:React.SFC<Props> = () => {
    const effect = useScroll() || 0;
    return(
    <S.Container>
        <S.Parallax>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax0.png"} alt="" effect={interpolate(effect, [0, 1200])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax1.png"} alt="" effect={interpolate(effect, [0, 1050])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax2.png"} alt="" effect={interpolate(effect, [0, 850])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax3.png"} alt="" effect={interpolate(effect, [0, 800])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax4.png"} alt="" effect={interpolate(effect, [0, 650])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax5.png"} alt="" effect={interpolate(effect, [0, 425])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax6.png"} alt="" effect={interpolate(effect, [0, 375])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax7.png"} alt="" effect={interpolate(effect, [0,75])}/>
            <S.Image src={"http://www.firewatchgame.com/images/parallax/parallax8.png"} alt="" effect={interpolate(effect, [0, 50])}/>
        </S.Parallax>
        <S.Content>
            <a>test</a>
        </S.Content>
    </S.Container>)
};

export default useScrollExample;
