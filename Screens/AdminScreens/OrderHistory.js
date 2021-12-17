import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function OrderHistory() {

    const arr=[
        {
            Text1:"KSPNMIR2020004",
            Text2:"05-09-2020 - ",
            Text3:"08:45",
            Service:'NMIR',
            AddInfo:'testUnit',
            CustmerName:'NMIR',
            CMOBNO:'9556693650',
            customerAddress:'PLOT NO - 91 SAMBALPUT, ODISHA',
            Pincode:'751003',
            Techname:'NMIR',
            TechMobNo:'9090772138',
            paymentRec:'RS. 300',
            paymentdate:'05-12-2021 - ',
            paymentTime:'14:54PM'
        },
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
                        width:"45%"
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
                <Text>Payment Received</Text>
                <Text>Payment Received Date & Time</Text>
            </View>

            <View style={{
                flexDirection:"row",
                marginLeft:"7%",
                paddingTop:"2%",
            }}>
                    <View style={{
                        width:"45%"
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