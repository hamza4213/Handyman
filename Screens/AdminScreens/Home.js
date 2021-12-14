import React from 'react';
import { View, Text,Dimensions } from 'react-native';
import Header from '../../Components/Header';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Home = () => {
    return (
        <View style={{width:Dimensions.get('screen').width,height:Dimensions.get('screen').width,marginTop:'5%',alignItems:'center'}}>
            
            <View style={{width:'100%',height:'17%',justifyContent:'center',}}>
                <Header txt='HandiMan' txt2="SambalPur" Iconname1="menu" Iconname2="location-outline"  />
            </View>
            
            <View style={{width:'100%',height:'8%',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderColor:'#dcdcdc'}}>
                <IonicIcon name='md-notifications-outline' color='#000' size={20}/>
                <Text style={{fontSize:12,fontWeight:'bold',top:'0.5%',color:'#8c8c8c'}}>Please expect delays in services due to covid-19 restriction</Text>
            </View>
            <View style={{width:'100%',height:'7%',flexDirection:'row',paddingLeft:'3.5%',marginTop:'2%'}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Most Used Services In Odisha</Text>
            </View>

        </View>
    );
};
export default Home;
