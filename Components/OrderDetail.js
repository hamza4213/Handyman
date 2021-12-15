import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';

const OrderDetail = (props) => {
    const{Text1,Text2,Text3,Text4,Text5,Text6,Text7,Text8,Text9}=props.item;
    return (
        <>
        <TouchableOpacity style={{borderWidth:1,borderColor:'#8c8c8c',paddingLeft:'2%',padding:'5%',}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{Text1}</Text>
            <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:14,fontWeight:'bold'}}>{Text2}</Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>{Text3}</Text>
            </View>
            <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#8c8c8c'}}>{Text4}</Text>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#8c8c8c'}}>{Text5}</Text>
            </View>
            <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#dcdcdc'}}>{Text6}</Text>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#dcdcdc'}}>{Text7}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:'12%'}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#dcdcdc'}}>{Text8}</Text>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#000'}}>{Text9}</Text>
            </View>
            
        </TouchableOpacity>
        <View style={{height:'0.5%'}}></View>
        </>
    );
};
export default OrderDetail;
