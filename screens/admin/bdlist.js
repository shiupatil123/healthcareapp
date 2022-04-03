
import React,{useEffect} from "react";
import { StyleSheet,View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Footer from '../footer';

// import { getAuth} from "firebase/auth";
// import { getDatabase, ref, set,get, onValue,child,} from "firebase/database";
// import { LogBox } from 'react-native';

import docimg from '../../assets/images/doc_home.png';



export default function bdlist({ route, navigation }) {
    LogBox.ignoreLogs(['Setting a timer']);

    const newsec = () => {
        navigation.navigate('bdlist');
    }


    return(
        <View>
            <ScrollView>
                <View style={styles.upper}>
                    <Image style={styles.docimage} source={docimg} />
                    <Text style={styles.tagline}>Much more than the white coats.</Text>
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
  

});