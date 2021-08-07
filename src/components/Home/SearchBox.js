import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import color from '../../assets/color';
import { makeLocationSearch } from '../../services/useAppBusaquiApi';
import { SearchBoxItem } from '../SearchBoxItem';
import {DrawerActions} from 'react-navigation-drawer'
export default class SearchBox extends Component {
    timer = null;
    constructor(props) {
        super(props);
        this.state = {
            txt:'',
            results:[]
        }
        this.txtFill = this.txtFill.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.callDrawer = this.callDrawer.bind(this);
    }
    txtFill(text){
        this.setState({txt:text, results:[]});

        if(typeof this.timer != null){
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(this.doSearch, 1000);
    }
    doSearch(){
        makeLocationSearch( this.state.txt )
            .then((results)=>{
                this.setState({results});
            })
            .catch((error)=>{    
                alert("OCORREU UM ERRO.")
            });
    }
    callDrawer(){
        this.props.navigation.openDrawer();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={this.callDrawer}
                    >
                        <Image 
                            source={require('../../assets/images/icons/menuIcon.png')}
                            style={styles.menuIcon}
                        />
                    </TouchableOpacity>
                    <TextInput style={styles.input} value={this.state.txt} onChangeText={this.txtFill} placeholder="Para onde você quer ir?" />
                </View>
                {this.state.results.length > 0 &&
                    <ScrollView style={styles.results}>
                        {this.state.results.map((i)=>{
                            return(
                                <TouchableHighlight 
                                    key={i.address} 
                                    style={styles.itemArea} 
                                    onPress={()=>{
                                        this.props.dataClick(i); 
                                        this.setState({results:[], txt:i.address})}
                                    } 
                                    underlayColor="#CCCCCC"
                                >
                                    <Text  style={styles.itemTxt}>{i.address}</Text>
                                </TouchableHighlight>
                                
                            );
                        })}
                    </ScrollView>
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    box:{
        width:'90%',
        height:50,
        marginTop:40,
        backgroundColor:'#FFFFFF',
        borderRadius:8,
        borderWidth:1,
        borderColor:'#CCCCCC',
        elevation:4,
        shadowOffset:{ width:1, height:1 },
        shadowColor:'#000000',
        shadowOpacity:0.2,
        shadowRadius:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    input:{
        width:'85%',
        height:'100%',
        padding: 10,
        fontSize:19,
        color:'#000',
    },
    results:{
        width:'90%',
        marginBottom:80,
        backgroundColor:'#FFFFFF',
        borderRadius:8,
        borderWidth:1,
        borderColor:'#CCCCCC',
    },
    itemArea: {
        height:42,
        justifyContent:'center',
        padding:10
    },
    itemTxt: {
        fontSize:15
    },
    menu: {
        height:42,
        width:'15%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'red',  
    },
    menuIcon: {
        height:24,
        width:24,
    }
});