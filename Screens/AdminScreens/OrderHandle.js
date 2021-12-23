import React from 'react'
import { View, Text,StyleSheet, Picker, TextInput, TouchableOpacity} from 'react-native'
export default function OrderHandle() {

    const technician=[
        {
            id:1,
            name:"Rahul"
        },
        {
            id:2,
            name:"Yadav"
        },
        {
            id:3,
            name:"Rajev"
        },
        {
            id:4,
            name:"Mohan"
        }
    ]
    return (
        <View style={styles.container}>
        
        <View style={{
            height:85,
            alignItems:"center",
            top:20
        }}>
                <Text style={{
                    fontWeight:"bold",
                    fontSize:24
                }}>
                    Admin Order Close, Edit, Assign Reassign Technician & Reject order
                </Text>
        </View> 

        <View style={{
            height:60,
        }}>
        <TextInput style={{
            height: 40,
            margin: 10,
            borderWidth: 3,       
            width:"95%",
            borderRadius:10,
            borderColor:"#f2f2f2",
            padding:10,
        }}
        placeholder="Enter here"
        />
        </View>       
        
        <View style={{
            flexDirection:"row",
            height:40,
            padding:10,
            justifyContent:"space-between",
            margin:20,
            bottom:20,
        }}>
            <TouchableOpacity
               // onPress={}
            style={{
                height:30,
                width:60,
                backgroundColor:"#3A8EC0",
                alignItems:"center",
                justifyContent:"center",
                borderRadius:5
            }}
            >
                <Text style={{color:"white"}}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
               // onPress={}
            style={{
                height:30,
                width:60,
                backgroundColor:"#3A8EC0",
                alignItems:"center",
                justifyContent:"center",
                borderRadius:5
            }}
            >
                <Text style={{color:"white"}}>Assign</Text>
            </TouchableOpacity>

            <TouchableOpacity
               // onPress={}
            style={{
                height:30,
                width:60,
                backgroundColor:"#3A8EC0",
                alignItems:"center",
                justifyContent:"center",
                borderRadius:5
            }}
            >
                <Text style={{color:"white"}}>Reassign</Text>
            </TouchableOpacity>

            <TouchableOpacity
               // onPress={}
            style={{
                height:30,
                width:60,
                backgroundColor:"#3A8EC0",
                alignItems:"center",
                justifyContent:"center",
                borderRadius:5
            }}
            >
                <Text style={{color:"white"}}>Close</Text>
            </TouchableOpacity>
        </View>

        <View style={{
            height:30,
            bottom:30,
            flexDirection:"row",
            justifyContent:"flex-end",
            paddingRight:30,
        }}>

        <TouchableOpacity
               // onPress={}
            style={{
                height:30,
                width:60,
                backgroundColor:"#3A8EC0",
                alignItems:"center",
                justifyContent:"center",
                borderRadius:5,
            }}
            >
                <Text style={{color:"white"}}>Reject</Text>
            </TouchableOpacity>
        </View>

        <View style={{
            height:100,           
        }}>
            <View style={{
                marginLeft:"7%",              
                height:50
            }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:"bold"
                    }}>
                        KSPNMIR20200001
                    </Text>

                    <Text style={{
                        fontSize:12,
                        color:'#8c8c8c'
                    }}>
                        05-09-2020 08:45
                    </Text>                   
            </View>

                    <Text style={{
                        paddingLeft:"7%",
                        fontWeight:"bold"
                    }}>
                        Technician Assigned
                    </Text>

                    <View style={{
                        paddingLeft:"5%",
                    }}>
                        <Picker style={{
                            fontWeight:"bold",
                            borderColor:"gray",
                            borderWidth:1                       
                        }}>
                            {technician.map(item=>(<Picker.Item label={item.name} value={item.name} />))}              
                        </Picker> 
                    </View>
            
            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"5%",
                width:"80%",               
                justifyContent:"space-between"
            }}>
                <Text style={{fontWeight:"bold"}}>Service</Text>
                <Text style={{fontWeight:"bold"}}>Addition Information</Text>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"2%",
            }}>
                    <View style={{
                        width:"45%",
                        
                    }}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:13
                        }}>
                        NMIR    
                        </Text>
                    </View>

                    <View style={{
                        width:"45%"
                    }}>
                            <Text style={{
                                fontSize:13,
                                fontWeight:"bold",
                                marginLeft:"10%"
                            }}>
                                testunit
                            </Text>
                    </View>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"5%",
                width:"80%",               
            }}>
                <Text style={{fontWeight:"bold"}}>Customer Name</Text>
                <Text style={{fontWeight:"bold",marginLeft:"25%"}}>Mobile No</Text>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"2%",
            }}>
                    <View style={{
                        width:"45%",
                        
                    }}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:13
                        }}>
                        NMIR    
                        </Text>
                    </View>

                    <View style={{
                        width:"45%"
                    }}>
                            <Text style={{
                                fontSize:13,
                                fontWeight:"bold",
                                marginLeft:"10%"
                            }}>
                                9556693650
                            </Text>
                    </View>
            </View>
                    
            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"5%",
                width:"80%",               
            }}>
                <Text style={{fontWeight:"bold"}}>Customer Address</Text>
                <Text style={{fontWeight:"bold",marginLeft:"20%"}}>Pin Code</Text>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"2%",
            }}>
                    <View style={{
                        width:"45%",
                        
                    }}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:13
                        }}>
                        PLOT NO - 91, SAMBALPUT, ODISHA 
                        </Text>
                    </View>

                    <View style={{
                        width:"45%"
                    }}>
                            <Text style={{
                                fontSize:13,
                                fontWeight:"bold",
                                marginLeft:"10%"
                            }}>
                                751003
                            </Text>
                    </View>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"5%",
                width:"80%",               
            }}>
                <Text style={{fontWeight:"bold"}}>Technician Name</Text>
                <Text style={{fontWeight:"bold",marginLeft:"20%"}}>Technician Mobile No</Text>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"2%",
            }}>
                    <View style={{
                        width:"45%",
                        
                    }}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:13
                        }}>
                        NMIR
                        </Text>
                    </View>

                    <View style={{
                        width:"45%"
                    }}>
                            <Text style={{
                                fontSize:13,
                                fontWeight:"bold",
                                marginLeft:"10%"
                            }}>
                                9090772138
                            </Text>
                    </View>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"5%",
                width:"92%",               
                justifyContent:"space-between",
            }}>
                <Text style={{}}>Payment Received</Text>
                <Text style={{}}>Payment Received Date & Time</Text>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"2%",
            }}>
                    <View style={{
                        width:"45%",
                        
                    }}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:13
                        }}>
                        Rs. 300
                        </Text>
                    </View>

                    <View style={{
                        width:"45%"
                    }}>
                            <Text style={{
                                fontSize:13,
                                fontWeight:"bold",
                                marginLeft:"10%"
                            }}>
                                05.12.2021 14:54PM
                            </Text>
                    </View>
            </View>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    flex:1
    },
});