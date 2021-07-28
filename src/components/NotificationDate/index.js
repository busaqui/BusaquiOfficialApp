import React from 'react'

import {Container,DateText} from './styled.js';

export const NotificationDate = (props) => {

    let NotificationTitle = props.NotificationTitle

    return(
        <Container>
            <DateText>
                {NotificationTitle}
            </DateText>
        </Container>
    )
}