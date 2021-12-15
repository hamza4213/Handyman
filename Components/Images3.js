import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
const Images3 = (props) => {
    const {item} = props;
    return(
        <View style={{marginHorizontal:'18%',marginVertical:'5%',}}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={item.onPress}>
                <Image source={item.IMAGE} style={{height:item.height,width:item.width,borderRadius:item.borderRadius,backgroundColor:item.backgroundColor,left:item.left}}/>
                <Text style={{left:item.left}}>{item.Imgtext}</Text>   
            </TouchableOpacity>
        </View>
    );
};
export default Images3;