import React from 'react';
import { View, Text,Dimensions,FlatList,Image} from 'react-native';
import Header3 from '../../Components/Header3';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Images3 from "../../Components/Images3";
const Home = () => {
    const Arr= [
        {IMAGE:require('../../Images/img1.png'),height:50, width:50, Imgtext:'Order'},
        {IMAGE:require('../../Images/img2.png'),height:50, width:50, Imgtext:'Aceept'},
        {IMAGE:require('../../Images/img3.png'),height:50, width:50, Imgtext:'Payment'},
        {IMAGE:require('../../Images/more.png'),height:50, width:50, Imgtext:'more'},
    ]
    return (
        <View style={{width:'100%',height:'100%',marginTop:'5%',backgroundColor:'#fff'}}>
            
            <View style={{width:'100%',height:'10%',justifyContent:'center',}}>
                <Header3 txt='HandiMan' txt2="SambalPur" Iconname1="menu" Iconname2="location-outline"  />
            </View>
            
            <View style={{width:'100%',height:'4%',justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderColor:'#dcdcdc'}}>
                <IonicIcon name='md-notifications-outline' color='#000' size={20}/>
                <Text style={{fontSize:12,fontWeight:'bold',top:'0.5%',color:'#8c8c8c'}}>Please expect delays in services due to covid-19 restriction</Text>
            </View>

            <View style={{width:'100%',height:'5%',flexDirection:'row',alignItems:'center',paddingLeft:'3.5%',marginTop:'2%'}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>Most Used Services In ODISHA</Text>
            </View>

            <View style={{width:'100%',height:'32%',}}>
                <FlatList
                    data={Arr}
                    numColumns='2'
                    keyExtractor={(item) => item}
                    renderItem={({item}) => <Images3 item={item}/>}
                />
            </View>

            <View style={{paddingLeft:'2%'}}>
                <Text style={{fontSize:18}}>what do you need to find?</Text>
            </View>

            <View style={{height:'50%',}}>
                <Image source={require('../../Images/taps.jpg')} style={{height:'100%'}}/>
            </View>

        </View>
    );
};
export default Home;
