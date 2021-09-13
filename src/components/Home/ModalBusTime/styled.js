import styled from 'styled-components/native';
import color from '../../../assets/color';

export const Container = styled.View`
    flex:1;
    justify-content: flex-end; 
`;

export const Content = styled.View`
    height: 158px;
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    justify-content: space-evenly;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
`;

export const RouteTitle = styled.Text`
    color: ${color.Azul};
    font-family: 'Montserrat-Bold';
    font-size: 18px;
`;

export const RouteNumArea = styled.View`
    flex-direction: row;
`;

export const RouteNumIcon = styled.Image`
    height: 18px;
    width: 18px;
    margin-right: 10px;
    margin-top: 3px;
`;

export const RouteNumID = styled.Text`
    color: ${color.Azul};
    font-size: 16px;
    font-family: 'Montserrat-Bold';
`;

export const Footer = styled.View`
    margin-left: 19px;
    margin-right: 19px;
    flex-direction: row;
    justify-content: space-between;
`;

export const SwitchableArea = styled.View`
    justify-content: space-between;
`;

export const BusTimeTextArea = styled.View`
    flex-direction: row;
`;

export const BusTimeText = styled.Text`
    margin-bottom: 15px;
    color: ${color.Azul};
    font-family: 'Montserrat-Regular';
    font-size: 17px;
`;

export const LoadBarContainer = styled.View`
    background-color: ${color.AzulClaro};
    height: 12px;
    width: 265px;
    border-radius: 6px;
`;

export const LoadBarBlue = styled.View`
    background-color: ${color.Azul};
    height: 12px;
    border-radius: 6px;
`;

export const BlueButton = styled.TouchableOpacity`
    background-color: ${color.Azul};
    width:207px;
    height:48px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-left: 11px;
    margin-right: 11px;
`;

export const BlueButtonText = styled.Text`
    color: ${color.Branco};
    font-family: 'Montserrat-Medium';
    font-size: 16px;
`;

export const CloseButton = styled.TouchableOpacity`
    height: 48px;
    width: 64px;
    border-radius: 8px;
    border-width: 2px;
    border-color: ${color.Azul};
    justify-content: center;
    align-items: center;
`;

export const CloseButtonText = styled.Text`
    font-size: 16px;
    color: ${color.Azul};
    font-family: 'Montserrat-SemiBold';
`;