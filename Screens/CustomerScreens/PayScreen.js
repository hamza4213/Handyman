import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Header from '../../Components/UserHeader';
import { AntDesign } from "@expo/vector-icons";

export default function PayScreen() {
const [click,setClick] = useState('')
return (
    <View style={{ flex: 1, backgroundColor: "#fff", }}>
    <View
        style={{
            height: 70,
            backgroundColor: "#D3D3D3",
            flexDirection: "row",
            alignItems: "center",
        }}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
        <AntDesign name='arrowleft' size={24} color='black' />
        </TouchableOpacity>
        <Header text='PAYMENT' fontSize={24} color='black' left={20} />
        </View>
        <View style={{height:'15%'}}></View>
        <View style={{backgroundColor:'#D3D3D3',height:'8%',width:'60%',alignSelf:'center',}}>
            <Text style={{left:50,fontSize:20}}>payment:</Text>
    {click ? (
        <TouchableOpacity
        onPress={() => setClick(!click)}
        style={{ height: "100%", width: "100%" }}>
        <View style={{flexDirection:'row',left:20,top:10}}>
        <View
            style={{
            height: 17,
            borderWidth: 1,
            width: 17,
            borderRadius: 100,
            marginHorizontal:10
            }}>
                <View style={{backgroundColor:'yellow',height:14,width:14,borderRadius:20}}></View>
            </View>
            <View>
            <Text>Cash on delivery</Text>
            </View>
            </View>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity
        onPress={() => setClick(!click)}
        style={{ height: "100%", width: "100%" }}>
        <View style={{flexDirection:'row',left:20,top:10}}>
        <View
            style={{
            height: 17,
            borderWidth: 1,
            width: 17,
            borderRadius: 100,
            marginHorizontal:10
            }}>
            </View>
            <View>
            <Text>Cash on delivery</Text>
            </View>
            </View>
        </TouchableOpacity>
    )}
    </View>
    <View style={{height:'25%'}}></View>
    <View style={{height:'30%',}}>
        <Image
        source={require('../../images/download.png')}
        style={{height:250,width:420}}
        />
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('UserSignIn')} style={{backgroundColor:'#D3D3D3',height:50,width:350,alignSelf:'center',borderRadius:10,position:'absolute',top:"90%"}}>
                <Text style={{textAlign:'center',top:12,fontSize:18,color:'#fff',fontWeight:'bold'}}>CONTINUE</Text>
            </TouchableOpacity>
    </View>
);
}

