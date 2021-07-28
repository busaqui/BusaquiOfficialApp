import styled from 'styled-components/native';
import color from '../../assets/color';

export const Container = styled.View`
    height: 60px;
    background-color: white;
    align-items: center;
    flex-direction:row;
`;

export const LogoContainer = styled.View`
    height: 35px;
    width: 35px;
    align-items: center;
    margin-left: 22px;
    margin-right: 10px;
`;

export const TextContainer = styled.View`
    justify-content: center;
    height: 100%;
    width: 80%;
    /* margin-right: 22px; */
    /* background-color: red; */
`;

export const Logo = styled.Image`
    height: 35px;
    width: 35px;
`;

export const LogoMask = styled.Image`
    height: 35px;
    width: 35px;
    bottom: 35px;
`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${color.Azul};
    font-family: 'Montserrat-Medium';
    height: 20px;
`;

export const Subtitle = styled.Text`
    font-size: 10px;
    color: ${color.Azul};
    font-family: 'Montserrat-Medium';
`;