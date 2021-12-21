import React from 'react'
import { StyleSheet, Text, View, Picker, TextInput, TouchableOpacity } from 'react-native'
export default function AddService() {
    return (
        <View style={styles.container}>
            <View style={{
                height:40,
                width:"96%",
                backgroundColor:"#3A8EC0",
                top:30,
                left:7,
                justifyContent:"center"
            }}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:18,left:10}}>Add Service</Text>
            </View>

                <View style={{
                    height:"100%",
                    top:40
                }}>

            <View style={{
            height:65,
            width:"100%",
            flexDirection:"row",
            alignItems:"center",
            }}>
                <View style={{
                    width:"20%",
                    flexDirection:"row",
                    justifyContent:"flex-end",
                    left:2
                }}>
                <Text style={{fontSize:11}}>Service Name</Text>
                <Text style={{color:'red'}}> *</Text>
                </View>
                <TextInput
                    style={{
                    height: 40,
                    margin: 10,
                    borderWidth: 2,       
                    width:"75%",
                    borderRadius:5,
                    borderColor:"#f2f2f2",
                    padding:10,
                }}
                placeholder=""
                />
            </View>

            <View style={{
            height:65,
            width:"100%",
            flexDirection:"row",
            alignItems:"center",
            }}>
                <View style={{
                    width:"20%",
                    flexDirection:"row",
                    justifyContent:"flex-end",
                    left:2
                }}>
                <Text style={{fontSize:11}}>Status</Text>
                <Text style={{color:'red'}}> *</Text>
                </View>
                <Picker
                    style={{
                    height: 40,
                    margin: 10,
                    borderWidth: 2,       
                    width:"75%",
                    borderRadius:5,
                    borderColor:"#f2f2f2",
                    padding:10,
                }}>
                <Picker.Item label="--Select Status--" value="--Select Status--"/>
                <Picker.Item label="Active" value="Active" />
                <Picker.Item label="In-Active" value="In-Active" />
                </Picker>               
            </View>

            <View style={{
                height:50,
                width:"100%",
                top:35,
                alignItems:"center",
                justifyContent:"center",
            }}>
                    <TouchableOpacity
                    // onPress={}
                    style={{
                        height:50,
                        width:100,
                        backgroundColor:"#3A8EC0",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:10,
                    }}
                    >
                        <Text style={{color:'white',fontSize:18}}>Save</Text>
                    </TouchableOpacity>
            </View>
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
