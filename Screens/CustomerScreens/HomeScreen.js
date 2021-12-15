import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Header from '../../Components/Header';
import Images from '../../Components/Image';
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const DATA= [
    {IMAGE:require('../../images/bulb.png'),height:50, width:50, Imgtext:'Electrician'},
        {IMAGE:require('../../images/tap.png'),height:50, width:50, Imgtext:'plumber'},
            {IMAGE:require('../../images/tv.png'),height:50, width:50, Imgtext:'television'},
                {IMAGE:require('../../images/more.png'),height:50, width:50, Imgtext:'more'},
]

const HomeScreen = () => {
return (
    <View style={{height:'100%',width:'100%'}}>
    <View style={{height:'10%',backgroundColor:'#D3D3D3',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <View style={{flexDirection:'row'}}>
        <Ionicons name="menu" size={28} color="black" style={{top:2}}/>
    <Header text='HANDIMAN' fontSize={24} fontWeight='bold' color='grey'/>
    </View>
    <View style={{flexDirection:'row'}}>
        <Header text='Sambalpur' fontSize={20} color='grey' fontWeight='bold'/> 
        <AntDesign name="enviromento" size={24} color="black" style={{top:3}}/>
    </View>
    </View>
    <View style={{height:'3%',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:18}}>Most used services in odisha</Text>
    </View>
    <View style={{height:'2%',}}></View>
    <View style={{height:'30%',}}>
    <FlatList
    data={DATA}
    numColumns='2'
    keyExtractor={(item) => item.Imgtext}
    renderItem={({item}) => <Images item={item}/>}
    />
    </View>
    <View>
        <Text style={{fontSize:18}}>what do you need to find?</Text>
    </View>
    <View style={{height:'40%',}}>
        <Image source={require('../../images/taps.jpg')}/>
    </View>
    </View>
);
}

export default HomeScreen

