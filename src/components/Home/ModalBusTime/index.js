import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import color from '../../../assets/color';
import {
    BlueButton,
    BlueButtonText,
    BusTimeText,
    BusTimeTextArea,
    CloseButton,
    CloseButtonText,
    Container,
    Content, 
    Footer, 
    Header, 
    LoadBarBlue, 
    LoadBarContainer, 
    RouteNumArea, 
    RouteNumIcon, 
    RouteNumID, 
    RouteTitle, 
    SwitchableArea
} from './styled';

export const ModalBusTime = (props) => {

    let RouteID = props.routeID;
    let RouteName = props.routeName;
    let Time = props.time;
    let BusInfoTime = props.busInfoTime;
    let BusDistance = props.busDistance;
    let InitialDistance = props.initialDistance;

    const percentage = (a,b) =>{
        let c = ((100*a)/b - 100)*(-1) + '%'

        return c;
    }

    const handleCloseModal = () => {
        props.visibleAction(false);
        props.busStopID(0);
        props.busChose(false);
        props.onBusAction(false);
    }

    const onBus = () => {
        props.onBusAction(!props.onBus);
    }

    return (
        <Modal
            transparent
        >
            <Container>
                <Content>
                    <Header>
                        <RouteTitle>
                            {RouteName}
                        </RouteTitle>

                        <RouteNumArea>
                            <RouteNumIcon
                                source={require('../../../assets/images/icons/busIcon.png')}
                            />

                            <RouteNumID>
                                {RouteID}
                            </RouteNumID>
                        </RouteNumArea>
                    </Header>

                    <Footer>
                        <SwitchableArea>
                            {(BusDistance > 100 && !props.onBus) &&
                                <>
                                    <BusTimeTextArea>
                                        <BusTimeText> {/* Este: Body - Text, Acima: Body - Text + Loading, Acima: Body*/}
                                            {`Chegada em`}
                                        </BusTimeText>

                                        <BusTimeText
                                            style={{
                                                marginBottom: 15,
                                                color: color.Azul,
                                                fontFamily: 'Montserrat-Bold',
                                                fontSize: 17
                                            }}
                                        > {/* Este: Body - Text, Acima: Body - Text + Loading, Acima: Body*/}
                                            {BusInfoTime}
                                        </BusTimeText>
                                    </BusTimeTextArea>


                                    <LoadBarContainer>
                                        <LoadBarBlue
                                            style={{
                                                width: percentage(BusDistance,InitialDistance)
                                            }}
                                        />
                                    </LoadBarContainer>

                                </>}
                                {(BusDistance < 100 || props.onBus == true ) &&
                                <BlueButton
                                    onPress={onBus}
                                >
                                    <BlueButtonText>
                                        Confirmar embarque
                                    </BlueButtonText>
                                </BlueButton>}
                        </SwitchableArea>

                        <CloseButton
                            onPress={handleCloseModal}
                        >
                            <CloseButtonText>
                                Sair
                            </CloseButtonText>
                        </CloseButton>
                    </Footer>
                </Content>
            </Container>
        </Modal>
    )
}