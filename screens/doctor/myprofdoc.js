import React, { useState , useEffect} from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { getDatabase, ref, set, onValue,} from "firebase/database";
import { getAuth} from "firebase/auth";
import { LogBox } from 'react-native';

import prof from '../../assets/images/Doc1.png';


export default function MyProfDoc({route}) {
    LogBox.ignoreLogs(['Setting a timer']);
    const auth = getAuth();
    const db = getDatabase();

    const user = auth.currentUser;
    console.log('user',user['uid']);
    const useri = user['uid'];

    const { docdata } = route.params;

    const [Name1, setName1] = useState(docdata['Name']);
    const [Mobile, setMobile] = useState(docdata['Mobile']);
    const [Email, setEmail] = useState(docdata['Email']);
    const [Loc, setLoc] = useState(docdata['Location']);
    const [Gen, setGen] = useState(docdata['Gender']);
    const [Lic, setLic] = useState(docdata['LicenseNo']);
    const [Spec, setSpec] = useState(docdata['Specialization']);
    const [Dob, setDob] = useState(docdata['DOB']);
    const [Consultc, setConsultc] = useState(docdata['ConsultationFee']);
    const [Edit, setEdit] = useState(false);


    const pressHandler = () => {
        setEdit(true);
    }
    const saveHandler = () => {        
        set(ref(db, 'Doctors/' + useri), {
            Name: Name1,
            Mobile,
            Email,
            Location:Loc,
            Gender:Gen,
            LicenseNo:Lic,
            Specialization:Spec,
            DOB:Dob,
            ConsultationFee:Consultc,
        })
        .then(() => {
            console.log("Data Upadted successfully!");
        })
        .catch((error) => {
            console.log("Error");
        });

        console.log('name',Name1);
        console.log('email',Email);
        setEdit(false);
    }


    return (
        <View>
            <View
                style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
                <Text
                    style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                   My Profile
                </Text>
            </View>
            
            <View style={styles.outcontainer}>
                <Image style={styles.profimage} source={prof} />
                <ScrollView>
                
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Full Name'
                    placeholderTextColor='#D8D8D8'
                    value={Name1}
                    onChangeText={(val) => setName1(val)}
                />
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Mobile Number'
                    placeholderTextColor='#D8D8D8'
                    keyboardType='numeric'
                    autoCompleteType='tel'
                    value={Mobile}
                    onChangeText={(val) => setMobile(val)}
                />
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Email Address'
                    placeholderTextColor='#D8D8D8'
                    keyboardType='email-address'
                    autoCompleteType='email'
                    value={Email}
                    onChangeText={(val) => setEmail(val)}
                />
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Location'
                    placeholderTextColor='#D8D8D8'
                    value={Loc}
                    onChangeText={(val) => setLoc(val)}
                />
                <Picker
                    enabled={Edit}
                    style={styles.picker}
                    selectedValue={Gen}
                    onValueChange={(itemValue) => setGen(itemValue)}
                >
                    <Picker.Item label='Gender' style={{ color: '#D8D8D8' }} />
                    <Picker.Item label='Male' value='Male' />
                    <Picker.Item label='Female' value='Female' />
                </Picker>
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='License Number'
                    placeholderTextColor='#D8D8D8'
                    value={Lic}
                    onChangeText={(val) => setLic(val)}
                />
                <Picker
                    enabled={Edit}
                    style={styles.picker}
                    selectedValue={Spec}
                    onValueChange={(itemValue) => setSpec(itemValue)}
                >
                    <Picker.Item label='Specialization' style={{ color: '#D8D8D8' }} />
                    <Picker.Item label='General' value='General' />
                    <Picker.Item label='Heart' value='Heart' />
                    <Picker.Item label='General' value='General' />
                    <Picker.Item label='Heart' value='Heart' />
                </Picker>
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Date of Birth'
                    placeholderTextColor='#D8D8D8'
                    value={Dob}
                    onChangeText={(val) => setDob(val)}
                />
                <TextInput
                    editable={Edit}
                    style={styles.nameinput}
                    placeholder='Consultation Charge'
                    placeholderTextColor='#D8D8D8'
                    keyboardType='numeric'
                    value={Consultc}
                    onChangeText={(val) => setConsultc(val)}
                />

                    {Edit == true ?
                <TouchableOpacity
                    style={styles.button}
                    onPress={saveHandler}>
                    <Text style={styles.bottontext}>Save Changes</Text>
                </TouchableOpacity> :


                <TouchableOpacity
                    style={styles.button}
                    onPress={pressHandler}>
                    <Text style={styles.bottontext}>Edit Profile</Text>
                </TouchableOpacity>
            }
                </ScrollView>
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
    outcontainer: {
        backgroundColor: '#1AA6E1',
        borderRadius: 30,
        width: '90%',
        top: '7%',
        height: 600,
        marginBottom:'10%',
        alignSelf: 'center'
    },
    profimage: {
        width: '29%',
        alignSelf: 'center',
        height: 100,
        marginTop: '-13%',
        borderRadius: 80,
        marginBottom: '5%',
        
    },
    nameinput: {
        width: '85%',
        height: 34,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
        marginBottom: '6%',
    },
    picker: {
        width: '85%',
        height: 30,
        alignSelf: "center",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        color: '#ffffff',
        marginBottom: '5%',
    },
    button: {
        width: '45%',
        height: 37,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom:'10%',
        paddingTop:3,
    },
    bottontext: {
        fontSize: 20,
    }
});
