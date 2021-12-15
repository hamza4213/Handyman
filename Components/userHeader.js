import React from 'react';
import {View, Text} from 'react-native';

const Header = (props) => {
    const {text,fontSize,fontWeight,color} = props;
    return(
        <View>
            <Text style={{fontSize:fontSize,fontWeight:fontWeight,color:color}}>{text}</Text>
        </View>
    )
}

export default Header;