///////////////////////////////////No FILE UPLOADED CODE

import React, {useState} from "react";
import { StyleSheet, View, Text, Button,ScrollView,TouchableOpacity,Image ,ImageBackground} from "react-native";
import empfold from '../../assets/images/emptyfold.png';

export default function Pastrecord1({ route, navigation}) {
    const {title} = route.params
    console.log('title',title);
    const pressHandler = () => {
        console.log('upload record!!!!!!!!!!!!!!!!!!!!');
    }
    return(   
        <View styles={styles.container}>
            <View
                style={{ backgroundColor: '#077395', height: 60,  justifyContent: 'center', marginBottom:60 }}>
                <Text style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>{title}</Text>
            </View>
            <View>
                <Image style={styles.image} source={empfold} />
                <Text style={styles.sectiontext1}>No records added! </Text>
                <Text style={styles.sectiontext}>Upload and have secure access to </Text>
                <Text style={styles.sectiontext}>all health records</Text>
                <TouchableOpacity 
                    style= {styles.butt}
                    onPress={pressHandler}>
                    <Text style= {styles.butttext}>Upload  Records</Text>
                </TouchableOpacity>
            </View>   
        </View>       
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectiontext:{
        color: 'black',
        fontSize: 17,
        alignSelf: 'center',
        width: 300,
        textAlign: 'center',
    },
    sectiontext1:{
        color: 'black',
        fontSize: 22,
        fontWeight:'bold',
        alignSelf: 'center',
        width: 300,
        textAlign: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        minHeight: 300,
        width:300,
        alignSelf:'center',
        marginBottom:50,
    },
    butt:{
        height:60,
        backgroundColor:'#2294B8',
        width:'60%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent: "center",
        borderRadius: 27,
        marginTop: 30,
    },
    butttext:{
        fontSize:22,
        color:'#fff'
    },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },

});
