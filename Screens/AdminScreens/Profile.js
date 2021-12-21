import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

export default function Profile() {
    return (
        <View style={{
            flex:1,
            backgroundColor:"#fff"
        }}>
            <View style={{
                top:25,
                height:50,
                width:"95%",
                backgroundColor:"#3A8EC0",
                justifyContent:"center",
                left:10
            }}
            >
                <Text style={{color:'white',fontWeight:"bold",fontSize:18,left:10}}>My Profile</Text>
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
                <Text>Name</Text>
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
                <Text>Email Address</Text>
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
                <Text>Password</Text>
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
                <Text>Phone No</Text>
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
                        <Text style={{color:'white',fontSize:18}}>Update</Text>
                    </TouchableOpacity>
            </View>
            </View>
      
        </View>
    )
}
