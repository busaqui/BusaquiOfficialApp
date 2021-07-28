import React, {useState, useCallback} from 'react'
import { TouchableHighlight,View, Text } from 'react-native'
import color from '../../assets/color';

import {Container,LogoContainer,TextContainer,Logo,LogoMask,Title,Subtitle} from './styled.js';

export const NotificationCard = (props) => {
    let NotificationLogo = props.NotificationLogo
    let NotificationText = props.NotificationText
    let NotificationTime = props.NotificationTime

    return(
        <Container>
            <LogoContainer>
                <Logo source={NotificationLogo}/>
                <LogoMask source={require('../../assets/images/Image_Mask.png')}/>
            </LogoContainer>
            <TextContainer>
                <Title>
                    {NotificationText}
                </Title>
                <Subtitle>
                    {NotificationTime}
                </Subtitle>
            </TextContainer>
        </Container>
    )
}