import React from "react";
import { StyleSheet, View, Text, Button,ScrollView,TouchableOpacity,Image ,ImageBackground} from "react-native";
import bgimg from '../../assets/images/re.jpg';


export default function Pastrecord({ route, navigation}) {
    const {patname} = route.params
    console.log('patname',patname)
    const pressHandler=(title)=>{
        navigation.navigate('Pastrecord1',{
            title,
        });
    }
    return(
        
        <View styles={styles.container}>
            <View
                    style={{ backgroundColor: '#077395', height: 60,  justifyContent: 'center' }}>
                    <Text
                        style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>
                        {patname}'s  Records
                    </Text>
            </View>
            <ScrollView>
                <View styles={styles.container2}>
                    <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
                        <TouchableOpacity 
                            style={styles.outerbox}
                            onPress={()=>pressHandler('Consultation  &  Prescription')}>
                        <Text style={styles.sectiontext}> Consultation & Prescription </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.outerbox} 
                            onPress={()=>pressHandler('Lab reports')}>
                            <Text style={styles.sectiontext}> Lab reports </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.outerbox} 
                            onPress={()=>pressHandler('Allergy Reports')}>
                            <Text style={styles.sectiontext}> Allergy Reports </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.outerbox} 
                            onPress={()=>pressHandler('Medical visits')}>
                            <Text style={styles.sectiontext}> Medical visits </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.outerbox} 
                            onPress={()=>pressHandler('Other documents')}>
                            <Text style={styles.sectiontext}> Other documents </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    
                    
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
        justifyContent: 'center',
    },
    container2: {
        alignItems: 'center',
    },
    sectiontext:{
        color: 'black',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight:'bold'
    },
    outerbox:{
        backgroundColor:'#8CDAF2',
        // backgroundColor:'rgb(159,219,238)',
        height: 80,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        width:'90%',
        marginTop: 10,
        borderRadius: 15,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        minHeight: 784,
        opacity: 0.9,
    },

});