import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import OrderDetail from '../../Components/OrderDetail';

const OrderDetailScreen = () => {
    const Arr3=[
        {
            Text1:"KSPNMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed"
        },
        {
            Text1:"KSPNMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed"
        },
        {
            Text1:"KSPNMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed"
        },
        {
            Text1:"KSPNMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed"
        },
        {
            Text1:"KSPNMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed"
        },
        {
            Text1:"KSPNMIR2020004",
            Text2:"SAMPALPUR ",
            Text3:"751003",
            Text4:"05-09-2021",
            Text5:"16:25",
            Text6:"Status - ",
            Text7:"Pending",
            Text8:"Additional info:",
            Text9:"Faulty wire  need to be removed"
        }
    ]
    return (
        <View style={{width:Dimensions.get("screen").width,height:Dimensions.get('window').height,marginTop:'6%',padding:'2%',alignItems:'center',backgroundColor:'#fff'}}>
            <View style={{width:'100%',height:'100%',bottom:'1%'}}>
                <FlatList
                    data={Arr3}
                    keyExtractor={(item)=>item.Text1}
                    renderItem={({item})=><OrderDetail item={item}/>}
                />
            </View>
        </View>
    );
};
export default OrderDetailScreen;
