import React, {useState} from 'react';
import { FlatList, Modal } from "react-native";
import moment from 'moment';

import { StackActions, NavigationActions } from 'react-navigation'

import {BusInfoCard} from '../BusInfoCard';
import {DATA_BUSLIST} from './BUS_DATA.js';

import {
    Container,Header,ListContainer,ArrowButton,ArrowButtonImage,
    HeaderText
} from './styled.js'

const BusList = (props) => {

    let busTime = props.busTime;
    let busStop = props.busStop;

    const handleBack = () => {
        props.busListVisible(false);
        props.busStopID(0);
    };

    // renderItems = ({ item }) => {
    //     return(
    //         <BusInfoCard
    //         BusID={item.busID}
    //         RouteName={item.routeName}
    //         Time={moment(item.time).endOf('minute').fromNow()}
    //     />
    //     )
    // }

    return(
        <Modal>
            <Header>
                <ArrowButton
                    onPress={handleBack}
                >
                    <ArrowButtonImage source={require('../../assets/images/icons/arrow.png')}/>
                    {/*TRANSFORMAR EM SVG*/}
                </ArrowButton>

                <HeaderText>
                    Linhas disponíveis
                </HeaderText>
            </Header>

            <ListContainer>

                {/* <FlatList
                    keyExtractor={(item) => String(item.id) }
                    renderItem={renderItems}
                    data={DATA_BUSLIST}
                    showsVerticalScrollIndicator={false}
                /> */}

                {busTime != 0 &&
                    <BusInfoCard
                    BusID={busStop[0]}
                    RouteName={"Paraíso X Cd. Alegria"}
                    Time={busTime.toFixed(0)}
                    modalVisible={props.modalTimeVisible}
                    busListVisible={props.busListVisible}
                    routeID={props.routeIDAction}
                    routeName={props.routeNameAction}
                    busChose={props.busChose}
                    busInfoTime={props.busInfoTime}
                    />
                }

                {/* <BusInfoCard
                    BusID={busStop[0]}
                    RouteName={"Paraíso X Cd. Alegria"}
                    Time={busTime.toFixed(0)}
                    modalVisible={props.modalTimeVisible}
                    busListVisible={props.busListVisible}
                    routeID={props.routeIDAction}
                    routeName={props.routeNameAction}
                    busChose={props.busChose}
                /> */}
                

            </ListContainer>
        </Modal>
    );
}

export default BusList; 