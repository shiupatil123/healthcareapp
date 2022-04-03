import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity,ScrollView,Alert } from 'react-native'
import Carousel from '../component/Carousel'
import { dummyData } from '../data/Data'
import Back from "../assets/images/back.jpg"
import Logo from "../assets/images/logo.png"
import { app } from '../config'
import { Picker } from '@react-native-picker/picker';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue} from "firebase/database";

import { LogBox } from 'react-native';

export default function signuppage({ navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Role, setRole] = useState();

    const auth = getAuth();
    const db = getDatabase();

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = auth.currentUser;
            console.log('user',user['uid']);
            const useri = user['uid'];
            if (Role == 'Doctor')
            {
                console.log('Dochome')
                navigation.navigate('Dochome');
            }
            else{
                console.log('Homepat')
                navigation.navigate('Homepat');
            }
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if(errorCode == "auth/user-not-found"){
            Alert.alert(
                "User Not found",
                "Please Register",
                [
                    {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
                );
            }
            if(errorCode == "auth/wrong-password"){
                Alert.alert(
                    "Incorrect Password",
                    "______________________",
                    "Enter correct password",
                    [
                        {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                    );
                }
        });
    }

    const Newusersignin = () => {
        // navigate to filldet page
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            const user = auth.currentUser;
            console.log('user',user['uid']);
            navigation.navigate('filldet');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if(errorCode == "auth/email-already-in-use"){
                Alert.alert(
                    "User Already exsist",
                    "Please login using your credentials",
                    [
                        {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                    );
                }
                // else if(errorCode == "auth/weak-password"){
                    else{
                    Alert.alert(
                        "Weak Password",
                        "Password should be at least 6 characters",
                        [
                            {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                        );
                    }
            // ..
        });
    }
    return (
        <View>
            <Image style={styles.backimage} source={Back}></Image>
            <Image style={styles.logo} source={Logo}></Image>
            <Carousel data={dummyData} style={{ marginBottom: "5%" }} />
            <ScrollView style={{ marginTop: '10%', }}>
                <View style={styles.inputContainer}>
                    <Picker 
                        style = {styles.picker}
                        selectedValue = {Role}
                        onValueChange={(itemValue) => setRole(itemValue)}
                    >
                        <Picker.Item label='Select Your Role' />
                        <Picker.Item label = 'Doctor' value= 'Doctor'/>
                        <Picker.Item label='Patient' value='Patient' />
                    </Picker> 
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    // onPress={signInWithEmailAndPassword}
                onPress={login}
                >
                    <Text style={styles.bottontext}>Login in</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 19, alignSelf: 'center',paddingTop:5 }}>OR</Text>
                <TouchableOpacity
                    style={styles.button}
                    // onPress={createUserWithEmailAndPassword}
                    onPress={Newusersignin}
                >
                    <Text style={styles.bottontext}>Register as New User?</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginBottom: 14,
    },
    backimage: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: 800,
    },
    logo: {
        height: 100,
        width: 100,
        marginTop: '10%',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: '85%',
        height: 42,
        alignSelf: "center",
    },
    inputpicker: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
    },
    picker: {
        backgroundColor: 'white',
        borderRadius:15,
        width: '85%',
        height: 45,
        alignSelf: "center",
        color: 'gray',
    },
    button: {
        width: '60%',
        height: 35,
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#268DAD',
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 2,
        // marginBottom: '5%',
        marginTop: '1%',
    },
    bottontext: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#FFFFFF',
    },
})
