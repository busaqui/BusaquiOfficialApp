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
`;
export const Area = styled.View`
    height:48px;
    width:92%;
    border-width: 1px;
    border-radius: 2px;
    border-color: #ddd;
    border-bottom-width: 2px;  
    elevation: 12;
    flex-direction:row;
    
`;
export const Menu = styled.TouchableHighlight`
    height:46.5px;
    width:12%;
    color:#000000;
`;
export const MenuIcon = styled.Image`
    height:46.5px;
    width:100%;
    background-color: #fdf;
`;
export const SearchInput = styled.TextInput`
    height:46.5px;
    width:88%;
    background-color: #fff;
    color:#000000;
    padding-left:8px;
`;
export const Result = styled.TouchableHighlight`
`;

export const ResultText = styled.Text`
   color:${color.PretoBusaqui};
   font-size:18px;
   margin-left:8px;
   margin-right:8px;
   margin-top:4px;
`;

export const Scroll = styled.ScrollView`
`;