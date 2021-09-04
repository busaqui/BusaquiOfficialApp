import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import color from '../../../assets/color';

export const ModalBusTime = (props) => {

    let RouteID = props.routeID;
    let RouteName = props.routeName;
    let Time = props.time;
    let BusInfoTime = props.busInfoTime;
    let BusDistance = props.busDistance;

    console.log(BusDistance);

    const handleCloseModal = () => {
        props.visibleAction(false);
        props.busStopID(0);
        props.busChose(false);
    }

    return (
        <Modal
            transparent
        >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View
                    style={{
                        height: 158,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        justifyContent: 'space-evenly'
                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        // marginTop: 25,
                        justifyContent: 'space-between',
                        marginHorizontal: 30,
                    }}>

                        <Text
                            style={{
                                color: color.Azul,
                                fontFamily: 'Montserrat-Bold',
                                fontSize: 18
                            }}
                        >
                            {RouteName}
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >

                            <Image
                                source={require('../../../assets/images/icons/busIcon.png')}
                                style={{
                                    height: 18,
                                    width: 18,
                                    marginRight: 10,
                                    marginTop: 3
                                }}
                            />


                            <Text
                                style={{
                                    color: color.Azul,
                                    fontSize: 16,
                                    fontFamily: 'Montserrat-Bold'
                                }}
                            >
                                {RouteID}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            marginHorizontal: 19,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <View
                            style={{
                                justifyContent: 'space-between',
                            }}
                        >
                            {BusDistance > 100 &&
                                <>
                                    <View
                                        style={{
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                marginBottom: 15,
                                                color: color.Azul,
                                                fontFamily: 'Montserrat-Regular',
                                                fontSize: 17
                                            }}
                                        > {/* Este: Body - Text, Acima: Body - Text + Loading, Acima: Body*/}
                                            {`Chegada em`}
                                        </Text>

                                        <Text
                                            style={{
                                                marginBottom: 15,
                                                color: color.Azul,
                                                fontFamily: 'Montserrat-Bold',
                                                fontSize: 17
                                            }}
                                        > {/* Este: Body - Text, Acima: Body - Text + Loading, Acima: Body*/}
                                            {BusInfoTime}
                                        </Text>
                                    </View>


                                    <View
                                        style={{
                                            backgroundColor: color.AzulClaro,
                                            height: 12,
                                            width: 265,
                                            borderRadius: 6
                                        }}
                                    />

                                </>}
                            <TouchableOpacity
                                style={{
                                    backgroundColor: color.Azul,
                                    width:207,
                                    height:48,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 8,
                                    marginHorizontal: 11
                                }}
                                onPress={handleCloseModal}
                            >
                                <Text
                                    style={{
                                        color: color.Branco,
                                        fontFamily: 'Montserrat-Medium',
                                        fontSize: 16
                                    }}
                                >
                                    Confirmar embarque
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={{
                                height: 48,
                                width: 64,
                                borderRadius: 8,
                                borderWidth: 2,
                                borderColor: color.Azul,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={handleCloseModal}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: color.Azul,
                                    fontFamily: 'Montserrat-SemiBold'
                                }}
                            >
                                Sair
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}