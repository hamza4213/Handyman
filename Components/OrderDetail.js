import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderDetail = (props) => {
    const {item} = props;
    const navigation= useNavigation();
    return (
        <>
        <TouchableOpacity 
            style={{borderWidth:1,borderColor:'#8c8c8c',paddingLeft:'2%',padding:'4%',}}
            onPress={()=>navigation.navigate("OrderHistoryScreen",{data:item})}
        >
            
            <Text style={{fontSize:18,fontWeight:'bold'}}>{item.Text1}</Text>
            
            <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:14,fontWeight:'bold'}}>{item.Text2}</Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>{item.Text3}</Text>
            </View>
            
            <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#8c8c8c'}}>{item.Text4}</Text>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#8c8c8c'}}>{item.Text5}</Text>
            </View>
            
            <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#dcdcdc'}}>{item.Text6}</Text>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#dcdcdc'}}>{item.Text7}</Text>
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:'12%'}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#dcdcdc'}}>{item.Text8}</Text>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>{item.Text9}</Text>
            </View>
            
        </TouchableOpacity>
        
        <View style={{height:'0.05%'}}></View>
        
        </>
    );
};
export default OrderDetail;
