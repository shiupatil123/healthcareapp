
import React,{useEffect} from "react";
import { StyleSheet,View, Image,Text } from "react-native";
import { ScrollView,  } from "react-native-gesture-handler";
import Footer from '../footer';

// import { getAuth} from "firebase/auth";
// import { getDatabase, ref, set,get, onValue,child,} from "firebase/database";
import { LogBox } from 'react-native';

import adminbg from '../../assets/images/adminbg.png';
import user1 from '../../assets/images/user.png';
import doctor from '../../assets/images/doctor.png';
import hosp from '../../assets/images/hospital.png';
import pstory from '../../assets/images/pstories.png';



export default function AdminHome({ route, navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);

    // const newsec = () => {
    //     navigation.navigate('bdlist');
    // }


    return(
        <View>
            <ScrollView>
                <View style={styles.upper}>
                    <Image style={styles.bgimage} source={adminbg} />
                </View>

                <View style={[styles.SquareShapeView, styles.shadowProp]}>

                </View>
                
                <View style={[styles.SquareShapeView, styles.shadowProp]}>

                </View>




                <View style={styles.count1}>
                    <View style={styles.count2}>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={user1} />
                            <Text style={{ fontSize: 16, }}>Our Users</Text>
                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>30 Crores</Text>
                        </View>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={doctor} />
                            <Text style={{ fontSize: 16, }}>Our Doctors</Text>
                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>1 Lakh</Text>
                        </View>
                    </View>
                    <View style={styles.count2}>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={hosp} />
                            <Text style={{ fontSize: 16, }}>Hospitals</Text>
                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>20,000</Text>
                        </View>
                        <View style={styles.count3}>
                            <Image style={styles.countitem} source={pstory} />
                            <Text style={{ fontSize: 16, }}>Patient Stories</Text>
                            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>40 Lakh</Text>
                        </View>
                    </View>
                </View>
              
                <Footer/>
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
    SquareShapeView: {
 
        width: 306,
        height: 272,
        marginLeft:'12%',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop:'-5%',
        marginBottom:'10%',
     
     
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    bgimage:{
        width:'90%',
        height:309,
        marginTop:'10%',
        marginLeft:'5%',
         
    },
    count1:{
        flexDirection: 'column',
        marginTop:'8%',
    },
    count2:{
        flexDirection:'row'
    },
    count3: {
        width: '40%',
        height: 120,
        alignItems:'center',
        marginLeft: '7%',
        marginBottom: '5%',
    },
    countitem: {
        width: '28%',
        height: 45,
        marginTop: '3%',
        marginBottom: '8%'
    },
  

});