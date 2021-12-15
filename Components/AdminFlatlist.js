import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
const AdminFlatlist = (props) => {
    const {item} = props;
    return(
        <View style={{marginHorizontal:'18%',marginVertical:'5%'}}>
            <TouchableOpacity>
                <Image source={item.IMAGE} style={{height:item.height,width:item.width,}}/>
            </TouchableOpacity>
                <Text>{item.Imgtext}</Text>
        </View>
    );
};
export default AdminFlatlist;