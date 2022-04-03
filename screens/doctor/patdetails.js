import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import patdet from '../../assets/images/patdet.png';


export default function PatDetails({ route,navigation}) {
    const { patName,patdob, patSession, patTime,patbg, patcon, symp, confee,Patid} = route.params
    console.log('patientsPatid',patName,patdob, patSession, patTime,patbg, patcon, symp, confee,Patid);
    const prescribe = () => {
        navigation.navigate('DocPrescri');

    }
    return (
        <View>
            <ScrollView>
            <View style={{ backgroundColor:'#C4C4C4', height: 740, borderRadius: 10}}>
                <View style={{ backgroundColor: '#077395', height: 200, }}>
                    <Text style={{ fontSize: 24, color: '#fff', alignSelf: 'center',fontWeight: 'bold',marginTop: '5%'}}>Patient's Details</Text>
                </View>
                    <View style={[styles.box, styles.shadowProp]}>
                    <Image style={{ width: '35%', height: 130, alignSelf: 'center', marginTop: '-17%',marginBottom:'4%'}} source={patdet}/>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)' }}>Name: {patName}</Text>

                    <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: 'rgba(0,0,0,0.67)', }}> Age: {patdob}yrs.</Text>
                        
                    <Text style={{ borderBottomColor: '#C4C4C4', borderBottomWidth: 1, width: '90%', alignSelf: 'center', marginBottom: '1%',}}></Text>

                    <Text style={styles.title}>Session</Text>
                    <Text style={styles.info}>{patSession}</Text>
                    
                    <Text style={styles.title}>Timing</Text>
                    <Text style={styles.info}>{patTime}</Text>
                    
                    <Text style={styles.title}>Blood Group</Text>
                    <Text style={styles.info}>{patbg}</Text>
                    
                    <Text style={styles.title}>Disease description</Text>
                    <Text style={styles.info}>{symp}</Text>
                    
                    <Text style={styles.title}>Charged consultation fee</Text>
                    <Text style={styles.info}>{confee}/- rs.</Text>
                    
                    <Text style={styles.title}>Contact on</Text>
                    <Text style={styles.info}>+91 {patcon}</Text>
                    
                    <TouchableOpacity 
                            style={styles.butt}
                            onPress={prescribe}>
                        <Text style={{ color: '#fff', fontSize: 21, padding: 10, marginLeft: 60, width: 200}}>Start Session</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    box:{
        backgroundColor: '#fff',
        height: 600,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        marginTop: '-20%',
        elevation:10,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    title:{
        marginLeft: '9%',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(7,115,149,0.67)',
        textDecorationLine: 'underline',
    },
    info:{
        marginLeft: '9%',
        fontSize: 16,
        marginBottom: '4%',
    },
    butt:{
        backgroundColor:'#32B757',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: '1%',
    },
});


