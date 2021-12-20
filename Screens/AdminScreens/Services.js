import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function Services({navigation}) {

    const service=[
        {
            name:"HandyMan",
            status:"active",
        },
        {
            name:"HandyMan",
            status:"active",
        }
    ] 
    return (
        <View style={styles.container}>
            <View style={{
                 height:50,
                 width:"98%",
                 justifyContent:"flex-end",
                 alignItems:"center",
                 top:25,
                 flexDirection:"row",          
                }}>
                
                <TouchableOpacity 
                onPress={() => navigation.navigate('AddService')}
                style={{
                    height:40,                    
                    backgroundColor:"#3A8EC0",
                    justifyContent:"center",
                    borderRadius:8,
                    alignItems:"center"
                }}>
                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Add Service</Text>
                </TouchableOpacity>               
            </View>

            <View style={{
                height:45,
                width:"100%",
                backgroundColor:"#3A8EC0",
                top:30,
                justifyContent:"center",
            }}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:16,left:7}}>Service List</Text>
            </View>

            <View style={{
                height:40,
                width:"100%",
                backgroundColor:"#d8d8d8",
                flexDirection:"row",
                top:30
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
                <Text style={{fontWeight:"bold"}}>SERVICE</Text>
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
                top:30
            }}>
                <FlatList
                data={service}
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
                <Text>{item.status}</Text>
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
                onPress={() => navigation.navigate('EditService')}
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
