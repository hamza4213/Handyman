import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    const{txt,txt2,Iconname1,Iconname2}=props;
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#dcdcdc',padding:'2%'}}>
            <View style={{flexDirection:'row',}}>
                <TouchableOpacity>
                    <IonicIcon name={Iconname1} color='#000' size={30}/>
                </TouchableOpacity>
                <Text style={{fontSize:22,fontWeight:'bold',top:'0.5%',color:'#8c8c8c'}}>{txt}</Text>
            </View>
            <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:20,fontWeight:'500',top:'3%',color:'#8c8c8c'}}>{txt2}</Text>
                <IonicIcon name={Iconname2} color='#8c8c8c' size={20} style={{top:'5%'}}/>
            </View>
        </View>
    );
};
export default Header;
