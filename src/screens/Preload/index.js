import React from 'react';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import fonts, { assets } from '../../../react-native.config';

import { 
  ScreenInitialLogin,
  Image,
  ViewStylePage,
  LogoBusaqui,
  ContainerText,
  ViewStyleTitle,
  Title, 
  ViewStyleSubtitle,
  Subtitle,
  ButtomSubscribe,
  ButtomSubscribeText  
} from './styled';

const Preload = (props) => {

    const handleSignUp = async () => {
        //CONDIÇÃO PARA INDICAR A QUAL TELA IRÁ IR
        if(!props.token) {
            //MANDAR PARA TELA DE LOGIN
            props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'SignIn'})
                ]
            }));
        } else {
            //MANDAR PARA TELA DE HOME
            props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'HomeDrawer'})
                ]
            }));
        }
    }
    //VERIFICA SE O USUÁRIO TEM UM TOKEN, SE SIM PÕE O TEXTO COMO "ENTRAR AGORA", SE NÃO PÕE O TEXTO COMO "CRIAR SUA CONTA"
    function HandleButtonText () {
        if (!props.token) {
            return(
                <ButtomSubscribeText>Criar sua conta</ButtomSubscribeText>
            )
        }

        else {
            return(
                <ButtomSubscribeText>Entrar agora</ButtomSubscribeText>
            )
        }
    }

    const handleLocationBus = async () => {
        //CONDIÇÃO PARA INDICAR A QUAL TELA IRÁ IR
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'LocationBus'})
            ]
        }));
    }
    
    return (
    <ScreenInitialLogin> 
        <StatusBar barStyle="light-content"/>
                {/* Imagem da primeira tela de login e container */}
        <Image  source={require('../../assets/images/ImagemGraal.png')}>  
            {/* Container do conteúdo */}
            <ViewStylePage> 
            {/* Container do logo Busaqui */}
                {/* Logo transparente do Busaqui inserido na parte superior centralizada em linha */}
                <LogoBusaqui source={require('../../assets/images/icons/logoBusaqui.png')}/>
                {/* CONTAINER DO TÍTULO + SUBTÍTULO */}
                <ContainerText>
                    <ViewStyleTitle>
                    {/* Título da screen */}
                        <Title>Saiba onde</Title>
                        <Title>seu ônibus</Title>
                        <Title>está agora!</Title>
                    </ViewStyleTitle>
                        {/* Container do subtítulo */}
                    <ViewStyleSubtitle>
                        {/* Subtítulo centralizado em linha abaixo do título */}
                            <Subtitle>Assistente de mobilidade urbana, que</Subtitle>
                            <Subtitle>mostra a localização em tempo real dos</Subtitle> 
                            <Subtitle>ônibus de sua cidade.</Subtitle>
                    </ViewStyleSubtitle>
                </ContainerText>
                <ButtomSubscribe
                underlayColor={'#fff4'}
                onPress={handleSignUp} activeOpacity={0.4}
                >
                {/*Função de texto do botão de entrar */}
                <HandleButtonText/>
                </ButtomSubscribe>

                <TouchableOpacity
                style={{width:120,
                        height:30, 
                        backgroundColor: 'red', 
                        justifyContent: 'center', 
                        alignItems:'center',
                        borderRadius: 15
                    }}
                onPress={handleLocationBus}
                >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                        Tela locationBus
                    </Text>
                </TouchableOpacity>
            </ViewStylePage>
        </Image> 
    </ScreenInitialLogin>   
    );
}

 const mapStateToProps = (state) => {
     return{
         token:state.userReducer.token
     };
 }

 export default connect(mapStateToProps)(Preload); 