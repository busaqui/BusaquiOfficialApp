import React, {useState} from 'react';
import { SectionList,
         ScrollView, 
         StatusBar } from "react-native";

import { StackActions, NavigationActions } from 'react-navigation';;
import {DATA_NOTIFICATIONS} from './NOTIFY_DATA';

import {NotificationCard} from '../../components/NotificationCard';
import {NotificationDate} from '../../components/NotificationDate';

import {
    Container,Header,ListContainer,ArrowButton,ArrowButtonImage,
    HeaderText
} from './styled.js'
import color from '../../assets/color';
import moment from 'moment';





const DATA = Object.values(DATA_NOTIFICATIONS.reduce((acc, item) => {
    let AddedTime = moment(item.addedTime).format('DD-MM-YYYY') 

    if (!acc[AddedTime]) acc[AddedTime] = {
        title: item.addedTime,
        data: []
    };
    acc[AddedTime].data.push(item);
    return acc;
}, {}))





const Notifications = (props) => {

    // moment.locale('pt-br');

    function HandleDate(value) {
        var date = new Date
        date.setDate(date.getDate() -1)

        let Day = moment(value).format('DD-MM-YYYY')
        let Today = moment(Date.now()).format('DD-MM-YYYY')
        let Yesterday = moment(date).format('DD-MM-YYYY')

        // return Day
        if(Day == Today){
            return 'Hoje'
        }
        else if (Day == Yesterday) {
            return 'Ontem'
        }
        else{
            return Day
        }
    }

    const renderItems = ({ item }) => {
        return(
            <NotificationCard
            NotificationLogo={require('../../assets/images/Default_Image.png')}
            NotificationText= {item.text}    
            NotificationTime= {moment(item.addedTime).startOf('hour').fromNow()}
            />
        )
    }

    const renderHeader = ({ section }) => {
        return (
            <NotificationDate
            NotificationTitle={HandleDate(section.title)}
            />
        )
    }

    const handleBack = () => {
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'HomeDrawer'})
            ]
        }));
    }

    return(
        <Container>
            <StatusBar backgroundColor={color.Branco} barStyle='dark-content'/>
            <Header>
                <ArrowButton
                    onPress={handleBack}
                >
                    <ArrowButtonImage source={require('../../assets/images/icons/arrow.png')}/>
                    {/*TRANSFORMAR EM SVG*/}
                </ArrowButton>

                <HeaderText>
                    Notificações
                </HeaderText>
            </Header>

            <ListContainer>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItems}
                    renderSectionHeader={renderHeader}
                    showsVerticalScrollIndicator={false}
                />

                {/* <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                    <NotificationDate>
                        Hoje
                    </NotificationDate> */}

                    {/* ARRAY COM AS DATAS DAS NOTIFICAÇÕES, IF ELSE PARA VER SE DATA DA NOTIFICAÇÃO = DATA DE HOJE, DATA DE HOJE -1 (ONTEM) OU > DATA DE HOJE -1 (DATAS ANTERIORES) */}
{/* 
                    <NotificationCard
                        NotificationLogo={require('../../assets/Images/Default_Image.png')}
                        NotificationText='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        NotificationTime='1 minuto'
                        />
                        <NotificationCard
                        NotificationLogo={require('../../assets/Images/Default_Image.png')}
                        NotificationText='Se apresse!! O 280 está chegando!'
                        NotificationTime='2 minutos '
                        />
                        <NotificationCard
                        NotificationLogo={require('../../assets/Images/Default_Image.png')}
                        NotificationText='Se apresse!! O 280 está chegando!'
                        NotificationTime='2 minutos '
                        />

                </ScrollView> */}
            </ListContainer>
        </Container>
    )
}

export default Notifications; 