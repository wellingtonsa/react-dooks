import React from 'react';
import * as S from './index.styles';
import { useWindowSize } from 'react-dooks';
interface Props  {}

const useWindowSizeExample:React.SFC<Props> = () => {
    const windowSize = useWindowSize() || { width: 0, height: 0};
    return (
    <S.Container>
        <S.Content>
            <span>{windowSize.width}</span>
            <span>x</span>
            <span>{windowSize.height}</span>
        </S.Content>
    </S.Container>)
};

export default useWindowSizeExample;
