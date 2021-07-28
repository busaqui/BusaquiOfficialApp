import React from 'react';
import {PageSplash,LogoBusaqui} from '../Splash/styled'


export default ()=>{
  return (
      /* Container da Primeira tela (Page) */
    <PageSplash>      
      {/* Logo centralizada em linha e coluna */}
        <LogoBusaqui source={require('../../assets/images/icons/logoBusaqui.png')} resizeMode="contain"/>
    </PageSplash>  
  );
}