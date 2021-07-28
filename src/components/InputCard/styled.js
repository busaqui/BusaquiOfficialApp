import styled from 'styled-components/native';
import color from '../../assets/color';

export const InputContainer = styled.View`
    padding: 10px;   
`;

export const Input = styled.TextInput`
    height: 48px;
    width:320px;
    margin-top: -10px;
    border-radius: 8px;
    align-self: stretch;
    padding: 0px 16px 0px 16px;
    font-family: 'Montserrat-Medium';
    color:${color.PretoOriginal};
`;

export const InputLabel = styled.Text`
    width: 60px;
    height: 20px;
    left: -20px;
    background-color: ${color.Branco};
    text-align: center;
    margin-left: 40px;
    z-index: 1;
    color: ${color.Azul};
    font-family: 'Montserrat-Medium';
`;