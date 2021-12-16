import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function OrderHistory() {

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
        }
    ]
    return (
        <View style={styles.container}>
            
            <View style={{
                marginLeft:"7%",
                marginTop:"10%",
                height:"5%"
            }}>
            <Text style={{
                fontWeight:"bold",
                fontSize:18
            }}>
                ORDER HISTORY
            </Text>
            </View>

            <View style={{
                marginLeft:"7%",
                
                height:"6%"
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
                fontWeight:"bold",
                paddingLeft:"7%"
            }}>
                Technician assigned
            </Text>

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
                // justifyContent:"space-between"
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
                // justifyContent:"space-between"
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
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height:"100%",
      width:"100%"
    },
  });
