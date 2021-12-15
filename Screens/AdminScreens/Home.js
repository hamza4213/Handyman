import React from 'react';
import { View, Text,Dimensions,FlatList,Image} from 'react-native';
import Header from '../../Components/Header';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Home = () => {
    const Arr=[
        {
            NAME:"ORDER",
            image:require("../../Images/img1.png")
        },
        {
            NAME:"Accept",
            image:require("../../Images/img2.png")
        },
        {
            NAME:"Payment",
            image:require("../../Images/img3.png")
        }
    ]
    return (
        <View style={{width:Dimensions.get('screen').width,height:Dimensions.get('screen').width,marginTop:'5%',alignItems:'center'}}>
            
            <View style={{width:'100%',height:'17%',justifyContent:'center',}}>
                <Header txt='HandiMan' txt2="SambalPur" Iconname1="menu" Iconname2="location-outline"  />
            </View>
            
            <View style={{width:'100%',height:'8%',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderColor:'#dcdcdc'}}>
                <IonicIcon name='md-notifications-outline' color='#000' size={20}/>
                <Text style={{fontSize:12,fontWeight:'bold',top:'0.5%',color:'#8c8c8c'}}>Please expect delays in services due to covid-19 restriction</Text>
            </View>

            <View style={{width:'100%',height:'7%',flexDirection:'row',paddingLeft:'3.5%',marginTop:'2%'}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Most Used Services In ODISHA</Text>
            </View>

            <View style={{width:'100%',height:'100%',backgroundColor:'lightblue'}}>
                <FlatList
                    data={Arr}
                    keyExtractor={(item)=>item.NAME}
                    numColumns={2}
                    renderItem={({item})=>(
                       <View style={{height:'100%',width:'65%',backgroundColor:'#8c8c8c',paddingRight:'5%'}}>
                           <View style={{height:'72%',width:'66%',padding:'20%'}}>
                                <Image source={item.image} style={{height:'100%',width:'100%'}}/>
                            </View>
                            <View style={{height:'30%',width:'65%',bottom:'25%',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:16,}}>{item.NAME}</Text>
                            </View>
                       </View> 
                    )}
                />
            </View>

        </View>
    );
};
export default Home;
