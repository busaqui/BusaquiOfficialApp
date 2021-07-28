import React,{useState} from 'react';
import color from '../../assets/color.js';
import {InputContainer,Input,InputLabel} from './styled.js';


export const InputCard = (props) => {
    let InputTitle = props.InputTitle
    let Placeholder = props.Placeholder
    let Editable = props.editable
    let Value = props.value
    let OnChangeText = props.onChangeText
    let AutoCapitalize = props.autoCapitalize
    let SecureTextEntry = props.secureTextEntry
    let KeyboardType = props.keyboardType

    const[Focus,setFocus] = useState(false)

    function HandleFocus() {
        setFocus(true)
    }

    function HandleBlur() {
        setFocus(false)
    }

    return(
        <InputContainer>

        <InputLabel>{InputTitle}</InputLabel>
        <Input 
        placeholder={Placeholder}
        placeholderTextColor = {color.Cinza}
        style={Focus ? {borderColor: color.Azul, borderWidth: 2} : {borderColor: color.Cinza, borderWidth: 1}}
        onFocus={HandleFocus}
        onBlur={HandleBlur}
        editable={Editable}
        value={Value}
        onChangeText={OnChangeText}
        autoCapitalize={AutoCapitalize}
        secureTextEntry={SecureTextEntry}
        keyboardType={KeyboardType}
        />

    </InputContainer>
    )
}