import React from 'react';
import { View, Text,Dimensions } from 'react-native';

const OrderHistoryScreen = ({route}) => {
    const {data}=route.params;
    return (
        <View style={{width:Dimensions.get("screen").width,height:Dimensions.get('window').height,marginTop:'6%',padding:'2%',paddingLeft:'4%',backgroundColor:'#fff'}}>
            <View style={{width:'100%',height:'7%',justifyContent:'center',}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>ORDER HISTORY</Text>
            </View>
           
            <View style={{width:'100%',height:'15%',justifyContent:'center',}}>
                <Text style={{fontSize:24,fontWeight:'bold',}}>{data.Text1}</Text>
                <View style={{flexDirection:'row',marginTop:'1%'}}>
                    <Text style={{fontSize:16,color:'#8c8c8c',fontWeight:'bold',}}>{data.Text4}</Text>
                    <Text style={{fontSize:16,color:'#8c8c8c',fontWeight:'bold',}}>{data.Text5}</Text>
                </View>
                <Text style={{fontSize:16,fontWeight:'bold',}}>Technician Assigned</Text>
            </View>

            {/* 1 ///////////////////////////////////////////////////////////// */}

            <View style={{width:'100%',height:'5%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Service</Text>
                </View>

                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Addition Information</Text>
                </View>
            </View>
            
            <View style={{width:'100%',height:'8%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:20,color:'#8C8C8C',fontWeight:'bold',}}>{data.Service}</Text>
                </View>

                <View style={{width:'50%',}}>
                    <Text style={{fontSize:20,color:'#8C8C8C',fontWeight:'bold',}}>{data.AddInfo}</Text>
                </View>
            </View>
            {/* 2 ///////////////////////////////////////////////// */}
            <View style={{width:'100%',height:'5%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Customer Name</Text>
                </View>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Mobile No</Text>
                </View>
            </View>
            
            <View style={{width:'100%',height:'8%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:20,color:'#8C8C8C',fontWeight:'bold',}}>{data.CustmerName}</Text>
                </View>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:20,color:'#8C8C8C',fontWeight:'bold',}}>{data.CMOBNO}</Text>
                </View>
            </View>
            {/* 3 ///////////////////////////////////////////////////// */}
            <View style={{width:'100%',height:'5%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Customer Adress</Text>
                </View>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Pin Code</Text>
                </View>
            </View>
            
            <View style={{width:'100%',height:'8%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:18,color:'#8C8C8C',fontWeight:'bold',}}>{data.customerAddress}</Text>
                </View>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:18,color:'#8C8C8C',fontWeight:'bold',}}>{data.Pincode}</Text>
                </View>
            </View>
            {/* 4 ////////////////////////////////////////////////////// */}
            <View style={{width:'100%',height:'5%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Technician Name</Text>
                </View>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Technician Mobile No</Text>
                </View>
            </View>
            
            <View style={{width:'100%',height:'8%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:18,color:'#8C8C8C',fontWeight:'bold',}}>{data.Techname}</Text>
                </View>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:18,color:'#8C8C8C',fontWeight:'bold',}}>{data.TechMobNo}</Text>
                </View>
            </View>
            {/* 5 ////////////////////////////////////////////////////// */}
            <View style={{width:'100%',height:'5%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Payment Recieved</Text>
                </View>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:16,color:'#000',fontWeight:'bold',}}>Payment Date&Time</Text>
                </View>
            </View>
            
            <View style={{width:'100%',height:'8%',justifyContent:'space-between',flexDirection:'row'}}>
                <View style={{width:'50%',}}>
                    <Text style={{fontSize:18,color:'#8C8C8C',fontWeight:'bold',}}>{data.paymentRec}</Text>
                </View>
                <View style={{width:'50%',flexDirection:'row'}}>
                    <Text style={{fontSize:18,color:'#8C8C8C',fontWeight:'bold',}}>{data.paymentdate}</Text>
                    <Text style={{fontSize:18,color:'#8C8C8C',fontWeight:'bold',}}>{data.paymentTime}</Text>
                </View>
            </View>
            {/* 5 ////////////////////////////////////////////////////// */}

        </View>
    );
};
export default OrderHistoryScreen;
