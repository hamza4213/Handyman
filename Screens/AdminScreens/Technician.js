import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
export default function Technician({navigation}) {

    const FormData=[
        {
            name:"Prakash",
            phone:"",
            email:"test6@floringeit.in",
            password:"",
            DOB:"",
            joining:"",
            leaving:"",
            address:"",
            pincode:"",
            addressProof:"",
            photo:require('../../Images/tick.png')
        },
        {
            name:"Prakash",
            phone:"",
            email:"test6@floringeit.in",
            password:"",
            DOB:"",
            joining:"",
            leaving:"",
            address:"",
            pincode:"",
            addressProof:"",
            photo:require('../../Images/tick.png')
        },
        {
            name:"Kamlesh",
            phone:"",
            email:"test6@floringeit.in",
            password:"",
            DOB:"",
            joining:"",
            leaving:"",
            address:"",
            pincode:"",
            addressProof:"",
            photo:require('../../Images/tick.png')
        }
    ]
    return (
        <View style={styles.container}>
            <View style={{
                height:65,
                width:"100%",
                top:20,
                flexDirection:"row",
                alignContent:"center",
                alignItems:"center",
                
            }}>
            <TextInput style={{
            height: 40,
            margin: 10,
            borderWidth: 3,       
            width:"83%",
            borderRadius:10,
            borderColor:"#f2f2f2",
            padding:10,
        }}
        placeholder="Search Name"
        />
            <TouchableOpacity>
            <Feather
            name='search'
            size={30}
            color={'#f2f2f2'}
            />
            </TouchableOpacity>           
            </View>

            <View style={{
                height:50,
                width:"98%",
                justifyContent:"flex-end",
                alignItems:"center",
                top:15,
                flexDirection:"row"
            }}>
            
                <TouchableOpacity
                // onPress={}
                style={{
                    height:40,
                    width:100,
                    backgroundColor:"#3A8EC0",
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:5,
                    right:50
                }}>
                    <Text style={{color:"white"}}>Search</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.navigate('AddTechnician')}
                style={{
                    height:40,
                    width:120,
                    backgroundColor:"#3A8EC0",
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:5,
                    padding:1
                }}>
                    <Text style={{color:"white"}}>Add Technician</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                height:45,
                width:"100%",
                backgroundColor:"#3A8EC0",
                top:15,
                justifyContent:"center",
            }}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:16,left:7}}>Technician List</Text>
            </View>

            <View style={{
                height:40,
                width:"100%",
                backgroundColor:"#d8d8d8",
                flexDirection:"row",
                top:15
            }}> 

            <View style={{
                height:40,
                width:"33.3%",
                borderWidth:1,
                borderColor:"gray",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Text style={{fontWeight:"bold"}}>NAME</Text>
            </View>

            <View style={{
                height:40,
                width:"33.3%",
                borderWidth:1,
                borderColor:"gray",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Text style={{fontWeight:"bold"}}>PHOTO</Text>
            </View>

            <View style={{
                height:40,
                width:"33.3%",
                borderWidth:1,
                borderColor:"gray",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Text style={{fontWeight:"bold"}}>ACTION</Text>
            </View>

            </View>

            <View style={{
                height:"100%",
                top:15
            }}>
                <FlatList
                data={FormData}
                renderItem={({ item }) => (
                <View style={{
                    height:70,
                    width:"100%",
                    flexDirection:"row"
                }}>                    
                    <View style={{
                height:70,
                width:"33.3%",
                borderWidth:1,
                borderColor:"gray",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Text>{item.name}</Text>
            </View>

            <View style={{
                height:70,
                width:"33.3%",
                borderWidth:1,
                borderColor:"gray",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <Image source={item.photo}
                style={{
                    height:60,
                    width:63
                }}
                />
            </View>
            <View style={{
                height:70,
                width:"33.3%",
                borderWidth:1,
                borderColor:"gray",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <TouchableOpacity
                onPress={() => navigation.navigate('EditDetails')}
                >
                    <FontAwesome5
                    name='edit'
                    size={17}
                    color={'green'}
                    />
                </TouchableOpacity>
            </View> 
                </View>
            )}
            keyExtractor={(item) => item.id}
            />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    }
})