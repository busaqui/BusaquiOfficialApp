import moment from 'moment';
import React, {useState} from 'react';
import { FlatList, ScrollView } from "react-native";

import { StackActions, NavigationActions } from 'react-navigation'

import {BusInfoCard} from '../../components/BusInfoCard';
import {DATA_BUSLIST} from './BUS_DATA.js';

import {
    Container,Header,ListContainer,ArrowButton,ArrowButtonImage,
    HeaderText
} from './styled.js'

const BusList = (props) => {

    renderItems = ({ item }) => {
        return(
            <BusInfoCard
            BusID={item.busID}
            RouteName={item.routeName}
            Time={moment(item.time).endOf('minute').fromNow()}
        />
        )
    }

    return(
        <Container>
            <Header>
                <ArrowButton>
                    <ArrowButtonImage source={require('../../assets/Images/Icons/Arrow.png')}/>
                    {/*TRANSFORMAR EM SVG*/}
                </ArrowButton>

                <HeaderText>
                    Linhas disponíveis
                </HeaderText>
            </Header>

            <ListContainer>

                <FlatList
                    keyExtractor={(item) => String(item.id) }
                    renderItem={renderItems}
                    data={DATA_BUSLIST}
                    showsVerticalScrollIndicator={false}
                />

            </ListContainer>
        </Container>
    );
}

export default BusList; 