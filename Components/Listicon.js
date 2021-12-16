import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from "@expo/vector-icons";


const Listicon = (props) => {
    const [click, setClick] = useState('')
    const {item} = props;
    return(
        <View>
        <View style={{height:15,backgroundColor:'#D3D3D3'}}></View>
        <View style={{height:85,backgroundColor:'#fff',justifyContent:'center'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:18,left:10,fontSize:20}}>{item.text}</Text>
                {click?(<TouchableOpacity onPress={()=> setClick(!click)}>
                <Text>{item.description}</Text>
                </TouchableOpacity>):(<TouchableOpacity onPress={()=> setClick(!click)}>
                <AntDesign name={item.iconName} size={24} color="black" style={{right:10}}/>
                </TouchableOpacity>)}
            </View>
        </View>
        </View>
    )
}

export default Listicon;



// {CheckIMage ? (
//           <TouchableOpacity onPress={() => setCheckIMage(!CheckIMage)}>
//             <View style={{ alignSelf: "center" }}>
//               <Ionicons name="person-outline" size={34} color="black" />
//             </View>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity onPress={() => setCheckIMage(!CheckIMage)}>
//             <View style={{ alignSelf: "center", height: 50, width: 50 }}>
//              <Image source={{uri:}}  />
//             </View>
//           </TouchableOpacity>
//         )}