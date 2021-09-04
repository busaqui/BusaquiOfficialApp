import styled from 'styled-components/native';
import color from '../../../assets/color';
import {DATA_BUSLIST} from '../../../screens/Home/BUSSTOP_DATA';

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const TouchableCloseVertical = styled.TouchableOpacity`
    width: 100%;
    height: 20%;
    /* height: auto; */
    /* background-color: red;   */
`;
export const ViewCloseMiddle = styled.View`
    height: 60%; 
    width: 100%;
    flex-direction:row;
`;
export const TouchableCloseHorizontal = styled.TouchableOpacity`
    width: 14%;
    height: 100%;
    /* background-color: red; */
`;

export const Content = styled.View`
    height: 100%;
    width: 72%;
    background-color: ${color.Branco};
    border-radius: 8px;
    /* border-width: 2px; */
    /* border-color: blue; */
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    justify-content: space-between;
    border-color: ${color.CinzaSombra};
    border-bottom-width: 0;  
    elevation: 5;
    padding-top: 23px;
    padding-bottom: 23px;
`;

export const BusStopImage = styled.Image`
    width: 85%;
    height: 48%;
    border-radius: 8px;
    /* margin-top: 29px; */
    align-self: center;
    /* background-image: ${DATA_BUSLIST.push.image}; */
`;

export const HeaderLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 23px;
    margin-right: 23px;
`;

export const Title = styled.Text`
    /* margin-top: 16px; */
    color: ${color.Azul};
    font-family: 'Montserrat-Bold';
    font-size: 16px;
`;

export const ButtonLike = styled.TouchableOpacity`
    width:24px;
    height:24px;
    /* margin-top:16px; */
    /* margin-left:10px; */
`;

export const IconLike = styled.Image`
    width:24px;
    height:24px;
`;

export const ButtonShare = styled.TouchableOpacity`
    width:24px;
    height:24px;
    /* margin-top: 16px; */
    /* margin-left:10px; */
`;

export const IconShare = styled.Image`
    width:24px;
    height:24px;
`;

export const AddressText = styled.Text`
    color: ${color.CinzaEscuro};
    font-size: 14px;
    font-family: 'Montserrat-Medium';
    margin-left: 23px;
    margin-right: 23px;
    /* margin-top: 9px; */
`;

export const Footer = styled.View`
    height:35px;
    width:86%;
    /* margin-top:25px; */
    flex-direction:row;
    align-self:center;
`;

export const ButtonBusLine = styled.TouchableOpacity`
    height:36px;
    width:95px;
    background-color:${color.Azul};
    margin-right:13px;
    justify-content:center;
    align-items:center;
    border-radius:6px;
`;

export const BusText = styled.Text`    
    font-family:'Montserrat';
    font-size:14px;
    color:${color.Branco};
`;

export const Time = styled.Text`
    font-family: 'Montserrat-Bold';
    font-size: 16px;
    margin-left: 1px;
    align-self:center;
`;

export const PearsonIcon = styled.Image`
    height:24px;
    width:24px;
    margin-left:13px;
    align-self:center;
`;
