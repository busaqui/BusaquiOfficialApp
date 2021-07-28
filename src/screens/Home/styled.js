import styled from 'styled-components/native';
import color from '../../assets/color.js';

export const Container = styled.View`
    flex:1;
`;
export const SearchArea = styled.View`
    position: absolute;
    left: 10px;
    right: 10px;
    top: 50px;
    align-items:center;
    height:100%;
    margin-bottom:20px;
    width:92%;
`;
export const Area = styled.View`
    height:41.37px;
    width:92%;
    border-width: 1px;
    border-radius: 2px;
    border-color: ${color.CinzaSombra};
    border-bottom-width: 0;  
    elevation: 12;
    flex-direction:row;   
`;
export const Menu = styled.TouchableHighlight`
    height:41.37px;
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
    height:41.37px;
    width:88%;
    background-color: ${color.Branco};
    color:${color.PretoBusaqui};
    padding-left:8px;
    font-size:17px;
`;
export const Result = styled.TouchableHighlight`
    padding:2px;
`;

export const ResultText = styled.Text`
   color:${color.PretoBusaqui};
   font-size:17px;
   margin-left:8px;
   margin-right:8px;
`;

export const Scroll = styled.ScrollView`
    width:92%;
    margin-bottom:80px;
    background-color:${color.Branco};                        
`;