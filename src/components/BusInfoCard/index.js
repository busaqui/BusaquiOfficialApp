import moment from 'moment';
import React, {useState, useCallback} from 'react'
import { TouchableHighlight } from 'react-native'
import color from '../../assets/color';

import {Container,TextContainer,LogoRoute,RouteTitle,InfoContainer,
        DurationText,DurationInfo,LogoContainer,BusNumber} from './styled.js'

//CARTÃO CONTENDO AS INFORMAÇÕES DE UMA LINHA

export const BusInfoCard = (props) => {
    let BusID = props.BusID;
    let RouteName = props.RouteName;
    let Time = props.Time;

    let FormattedTime = Time > 1 ? ` ${Time}` : ` 1`;
    let PreviewedTime = parseInt(Time * 60 * 1000) + Date.now();
    let InfoTime = `${FormattedTime} min - ${moment(PreviewedTime).format('LT')}`

    console.log("Now: " + Date.now());
    console.log("Time: "+ InfoTime);

    const [IsPressed, setIsPressed] = useState(false);

    const handlePressed = useCallback(() => {
        setIsPressed(true);
    }, []);

    const handleUnpressed = useCallback(() => {
        setIsPressed(false);
    }, []);

    const handleClicked = () => {
        props.modalVisible(true);
        props.busListVisible(false);
        props.routeID(BusID);
        props.routeName(RouteName);
        props.busChose(true);
        props.busInfoTime(InfoTime);
    }

    return(
        <TouchableHighlight
        onPressIn={handlePressed}
        onPressOut={handleUnpressed}
        activeOpacity={100}
        onPress={handleClicked}
        >
        <Container 
        style={IsPressed ?  
            {backgroundColor: color.Azul} : 
            {backgroundColor: color.Branco}}>

            <LogoContainer>
                <LogoRoute
                source={IsPressed ? require('../../assets/images/icons/whiteBusNumber.png')
                        : require('../../assets/images/icons/blackBusNumber.png')}
                />

                <BusNumber 
                style={IsPressed ?  
                        {color: color.Branco,
                        backgroundColor: color.Azul} : 
                        {color: color.PretoBusaqui,
                        backgroundColor: color.Branco}}>
                    {BusID}
                </BusNumber>
            </LogoContainer>

            <TextContainer>
                <RouteTitle
                style={IsPressed ?  
                    {color: color.Branco} : 
                    {color: color.PretoBusaqui}}>

                    {RouteName}
                </RouteTitle>

                <InfoContainer>
                    <DurationText
                    style={IsPressed ?  
                    {color: color.Branco} : 
                    {color: color.Cinza}}>
                    
                        Chegada em
                    </DurationText>

                    <DurationInfo
                    style={IsPressed ?  
                    {color: color.Branco} : 
                    {color: color.PretoBusaqui}}>

                        {InfoTime}
                    </DurationInfo>
                </InfoContainer>
            </TextContainer>
        </Container>
        </TouchableHighlight>
    )
}