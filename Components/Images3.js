import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Images3 = (props) => {
    const {item} = props;
    const navigation = useNavigation();
    return(
        <View style={{marginHorizontal:'18%',marginVertical:'5%',}}>
            <TouchableOpacity  style={{alignItems:'center'}} onPress={()=>navigation.navigate(item.navigateto)}>
                <Image source={item.IMAGE} style={{height:item.height,width:item.width,borderRadius:item.borderRadius,backgroundColor:item.backgroundColor,left:item.left}}/>
                <Text style={{left:item.left}}>{item.Imgtext}</Text>   
            </TouchableOpacity>
        </View>
    );
};
export default Images3;