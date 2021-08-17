import styled,{ css } from 'styled-components/native';
import color from '../../assets/color.js';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex:1;
`;
export const SearchArea = styled.View`
    position: absolute;
    left: 10px;
    right: 10px;
    align-items:center;
    height:74%;
    width:92%;

    ${Platform.select({
        ios:css`
        margin-top:25px;
        background-color:#0000;
        `,

        android:css`
        margin-top:18px;
        `
    })}
`;
export const Area = styled.View`
    height:41.37px;
    width:94%;
    border-width: 3px;
    border-radius: 2px;
    border-color: ${color.CinzaSombra};
    border-bottom-width: 0;  
    elevation: 5;
    flex-direction:row; 
    justify-content:center;
    align-items:center; 
`;
export const Menu = styled.TouchableHighlight`
    height:42px;
    width:12%;
    justify-content:center;
    align-items:center;
    background-color:${color.Branco};   
`;
export const MenuIcon = styled.Image`
    height:24px;
    width:24px;
`;
export const SearchInput = styled.TextInput`
    height:42px;
    width:88%;
    background-color: ${color.Branco};
    color:${color.PretoBusaqui};
    padding-left:8px;
    font-size:16px;
`;
export const Result = styled.TouchableHighlight`
    padding:2px;
`;

export const ResultText = styled.Text`
   color:${color.PretoBusaqui};
   font-size:16px;
   margin-left:8px;
   margin-right:8px;
`;

export const Scroll = styled.ScrollView`
    width:92%;
    margin-bottom:10px;
    background-color:${color.Branco};                        
`;

export const ViewButton = styled.View`
    width:120px;
    height:40px;
    /* position:absolute; */
    background-color:#cfc;
    justify-content:flex-end;

`;