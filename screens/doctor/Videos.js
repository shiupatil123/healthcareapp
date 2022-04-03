// can make it like : categorize in heart/brain/eye/ etc. surgeries 
import React, {useState} from "react";
import {Text, View, StyleSheet, Linking, Button,TouchableOpacity,SafeAreaView,ImageBackground,Image, ScrollView} from "react-native";
// import { getAuth} from "firebase/auth";
// import { getDatabase, ref, set,get, onValue,child,} from "firebase/database";
// import { LogBox } from 'react-native';
import Modal from "react-native-modal";

import append from '../../assets/images/append.jpg';
import heartsur from '../../assets/images/heartsur.jpg';
import brainsur from '../../assets/images/brainsur.jpg';
import surgery from '../../assets/images/surgery.jpg';
import eye from '../../assets/images/eye.jpg';
import csection from '../../assets/images/csection.jpg';


import medinstru from '../../assets/images/medinstru.jpg';
import rsurgery from '../../assets/images/rsurgery.jpg';
import ayu from '../../assets/images/ayu.jpg';

export default function Videos({ route, navigation }) {

    const openpdf = (link) =>{
      Linking.openURL(link)
    }

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const toggleModal1 = () => {
      setModalVisible1(!isModalVisible1);
    };
    const toggleModal2 = () => {
      setModalVisible2(!isModalVisible2);
    };
    const toggleModal3 = () => {
      setModalVisible3(!isModalVisible3);
    };

    return(
      <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#077395', height: 60, width: '100%', justifyContent: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 22, alignSelf: 'center', }}>Videos</Text>
      </View>
      <View style={{ flexDirection: 'column', marginBottom:70 }}>
      <ScrollView>
            <TouchableOpacity 
              onPress={toggleModal1}
              style={styles.catbox}>
                  <ImageBackground source={heartsur} resizeMode="cover" style={styles.img} imageStyle={{ borderRadius: 10}}>
                    <View style={styles.textbg}>
                      <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Heart Surgery</Text>
                      {/* <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Improve Lives Together</Text> */}
                    </View>
                  </ImageBackground>   
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={toggleModal}
              style={styles.catbox}>
                  <ImageBackground source={append} resizeMode="cover" style={styles.img} imageStyle={{ borderRadius: 10}}>
                    <View style={styles.textbg}>
                      <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Appendectomy</Text>
                      {/* <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Improve Lives Together</Text> */}
                    </View>
                  </ImageBackground>   
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={toggleModal3}
              style={styles.catbox}>
                  <ImageBackground source={brainsur} resizeMode="cover" style={styles.img} imageStyle={{ borderRadius: 10}}>
                    <View style={styles.textbg}>
                      <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Brain Surgery</Text>
                      {/* <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Improve Lives Together</Text> */}
                    </View>
                  </ImageBackground>   
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={toggleModal2}
              style={styles.catbox}>
                  <ImageBackground source={rsurgery} resizeMode="cover" style={styles.img} imageStyle={{ borderRadius: 10}}>
                    <View style={styles.textbg}>
                      <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Robotic Surgery</Text>
                      {/* <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Improve Lives Together</Text> */}
                    </View>
                  </ImageBackground>   
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={toggleModal}
              style={styles.catbox}>
                  <ImageBackground source={eye} resizeMode="cover" style={styles.img} imageStyle={{ borderRadius: 10}}>
                    <View style={styles.textbg}>
                      <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Cataract Surgery</Text>
                      {/* <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Improve Lives Together</Text> */}
                    </View>
                  </ImageBackground>   
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={toggleModal1}
              style={styles.catbox}>
                  <ImageBackground source={csection} resizeMode="cover" style={styles.img} imageStyle={{ borderRadius: 10}}>
                    <View style={styles.textbg}>
                      <Text style={{color:'#fff',fontSize:19,fontWeight:'bold'}}>Cesarean section</Text>
                      {/* <Text style={{color:'#fff',fontSize:17,fontStyle: 'italic'}}>Improve Lives Together</Text> */}
                    </View>
                  </ImageBackground>   
            </TouchableOpacity>
        </ScrollView>
      </View>

      {/* model for Heart */}
      <Modal isVisible={isModalVisible} style={styles.modalbox}>
        <View style={{ flex: 1 }}>
        <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>COVID-19 Virus Videos</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=3Nf6Q2skGOM')}
            style={styles.catbutt}>
            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Video 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=eDmlWAaDxVg')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=-dJILhabG0A')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=3VqxtG_7DIM')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 4</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=YDgqOKmFhww')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/results?search_query=heart+surgey')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 6</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.closebut}>
            <Text style={{color:'#fff',fontSize:18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* model for Appendectomy */}
      <Modal isVisible={isModalVisible1} style={styles.modalbox}>
        <View style={{ flex: 1 }}>
        <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>Medical InstrumentsVideos</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=8OK-_4Wx3QY')}
            style={styles.catbutt}>
            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Video 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=E1ljClS0DhM')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=E8UPLNhr2B4')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=VfT--J-MZlM')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 4</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=b0nepBxLwuU')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://www.youtube.com/watch?v=NzqEPqZHGTc')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 6</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={toggleModal1}
            style={styles.closebut}>
            <Text style={{color:'#fff',fontSize:18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* model for Diet Guide Videos */}
      <Modal isVisible={isModalVisible2} style={styles.modalbox}>
        <View style={{ flex: 1 }}>
        <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>Diet Guide Videos</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Video 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 4</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 6</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={toggleModal2}
            style={styles.closebut}>
            <Text style={{color:'#fff',fontSize:18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* model for Ayurvedic Journal Videos */}
      <Modal isVisible={isModalVisible3} style={styles.modalbox}>
        <View style={{ flex: 1 }}>
        <Text style={{color:'#fff',alignSelf:'center',fontSize:18, fontWeight:'bold',marginTop:20}}>Ayurvedic Videos</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff', fontSize:18,fontWeight:'bold'}}>Video 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 4</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>openpdf('https://reader.elsevier.com/reader/sd/pii/S0188440921001417?token=3797C01A8BE6C23BB122D9103E804CB84016BF0199FE21FCB6927D31F0245CCBF1091ACFAB598D0BC538358E4CDB964A&originRegion=eu-west-1&originCreation=20220227121437')}
            style={styles.catbutt}>
            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Video 6</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={toggleModal3}
            style={styles.closebut}>
            <Text style={{color:'#fff',fontSize:18}}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      </View>
    )
}
const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: "center"},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  catbutt:{
    backgroundColor:'#077395',
    borderRadius:10,
    height:80,
    width: 150,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginLeft:'7%',
    marginBottom:'3%',
    marginTop:'4%',
  },
  text: {
    color: "white",
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: "bold",
    backgroundColor: "#000000c0"
  },
  closebut:{
    backgroundColor:'#909090',
    width: 120,
    height: 40,
    alignItems:'center',
    borderRadius:10,
    padding: 5,
    marginTop: 40,
    marginLeft: 230,
  },
  modalbox:{
    marginTop:60,
    justifyContent:'center',
    backgroundColor:'rgba(1,1,1,0.5)',
    borderRadius:10,
  },
  catbox:{
    backgroundColor:'rgba(1,1,1,0.5)',
    height: 170, 
    width:'95%',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:13,
    borderRadius: 10,
    },
  img:{
    width:'100%',
    justifyContent:'center',
    flex: 1,
    alignItems:'center',
    opacity:0.9,
  },
  textbg:{
    backgroundColor:'rgba(1,1,1,0.5)',
    height: 150, 
    width:'93%',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius: 10,
  }
})