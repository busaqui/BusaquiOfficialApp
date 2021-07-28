import styled from 'styled-components/native';
import color from '../../assets/color';

export const Container = styled.View`

`;

export const InputText = styled.TextInput`
    height: 52px;
    font-weight: 600;
    font-size: 16px;
    border-color: ${color.Cinza};
    color: ${color.Preto};
    border-radius: 8px;
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-left-width: 1px;
    padding: 16px;
    line-height: 24px;
    align-self: center;
    margin-top: -10px;
    font-family: 'Montserrat-SemiBold';
    align-self:stretch;
    left:20px;
    margin-right:40px;
    margin-bottom:10px;
`;

export const InputLabel = styled.Text`
    align-self: baseline;
    color: ${color.PretoBusaqui};
    font-size: 13px;
    left: 40px;
    height: 20px;
    background-color: ${color.Branco};
    border-left-width: 4px;
    border-left-color: ${color.Branco};
    border-right-width: 4px;
    border-right-color: ${color.Branco};
    text-align: center;
    z-index: 3;
    font-family: 'Montserrat-SemiBold';
`;