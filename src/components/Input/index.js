import React from 'react';
import color from '../../assets/color';

import {Container,InputLabel,InputText} from './styled.js'

export const Input = (props) => {

    let label = props.inputLabel
    let inputPlaceholder = props.inputPlaceholder
    let keyboardType= props.keyboardType
    let autoCorrect = props.autoCorrect
    let secureTextEntry = props.secureTextEntry

    return(
        <Container>
            <InputLabel>{label}</InputLabel>
                <InputText
                placeholder={`Digite ${inputPlaceholder}`}
                placeholderTextColor= {color.Cinza}
                keyboardType={keyboardType}
                // onChangeText={e=>setEmail(e)}
                // value={Email}
                autoCorrect = {autoCorrect}
                secureTextEntry = {secureTextEntry}
                autoCapitalize='none'
                />
        </Container>
    )
}