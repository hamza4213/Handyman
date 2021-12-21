import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import OrderDetail from '../../Components/OrderDetail';

const OrderDetailScreen = () => {
    const Arr3=[
        {
            Text1:"KSPNMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021 - ",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed",
            Service:'NMIRSS',
            AddInfo:'TestUnit',
            CustmerName:'NMIRU',
            CMOBNO:'9333939393',
            customerAddress:'plot no 21 street 2 house 4',
            Pincode:'751003',
            Techname:'NMIR',
            TechMobNo:'9324556665',
            paymentRec:'RS. 300',
            paymentdate:'15-09-2021 - ',
            paymentTime:'12:25'
        },
        {
            Text1:"KSPrMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021 - ",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed",
            Service:'NMIRSS',
            AddInfo:'TestUnit',
            CustmerName:'NMIRU',
            CMOBNO:'9333939393',
            customerAddress:'plot no 21 street 2 house 4',
            Pincode:'751003',
            Techname:'NMIR',
            TechMobNo:'9324556665',
            paymentRec:'RS. 300',
            paymentdate:'15-09-2021 - ',
            paymentTime:'12:25'
        },
        {
            Text1:"KSPMMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021 - ",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed",
            Service:'NMIRSS',
            AddInfo:'TestUnit',
            CustmerName:'NMIRU',
            CMOBNO:'9333939393',
            customerAddress:'plot no 21 street 2 house 4',
            Pincode:'751003',
            Techname:'NMIR',
            TechMobNo:'9324556665',
            paymentRec:'RS. 300',
            paymentdate:'15-09-2021 - ',
            paymentTime:'12:25'
        },
        {
            Text1:"KSPBMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021 - ",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed",
            Service:'NMIRSS',
            AddInfo:'TestUnit',
            CustmerName:'NMIRU',
            CMOBNO:'9333939393',
            customerAddress:'plot no 21 street 2 house 4',
            Pincode:'751003',
            Techname:'NMIR',
            TechMobNo:'9324556665',
            paymentRec:'RS. 300',
            paymentdate:'15-09-2021 - ',
            paymentTime:'12:25'
        },
        {
            Text1:"KSPKMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021 - ",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed",
            Service:'NMIRSS',
            AddInfo:'TestUnit',
            CustmerName:'NMIRU',
            CMOBNO:'9333939393',
            customerAddress:'plot no 21 street 2 house 4',
            Pincode:'751003',
            Techname:'NMIR',
            TechMobNo:'9324556665',
            paymentRec:'RS. 300',
            paymentdate:'15-09-2021 - ',
            paymentTime:'12:25'
        },
        {
            Text1:"KSPLMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021 - ",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed",
            Service:'NMIRSS',
            AddInfo:'TestUnit',
            CustmerName:'NMIRU',
            CMOBNO:'9333939393',
            customerAddress:'plot no 21 street 2 house 4',
            Pincode:'751003',
            Techname:'NMIR',
            TechMobNo:'9324556665',
            paymentRec:'RS. 300',
            paymentdate:'15-09-2021 - ',
            paymentTime:'12:25'
        }
    ]
    return (
        <View style={{width:Dimensions.get("screen").width,height:Dimensions.get('window').height,marginTop:'6%',padding:'2%',alignItems:'center',backgroundColor:'#fff'}}>
            <View style={{width:'100%',height:'7%',justifyContent:'center',paddingLeft:'2%'}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>ORDER DETAILS</Text>
            </View>
                <FlatList
                    data={Arr3}
                    keyExtractor={(item)=>item.Text1}
                    renderItem={({item})=><OrderDetail item={item}/>}
                />
            
        </View>
    );
};
export default OrderDetailScreen;
