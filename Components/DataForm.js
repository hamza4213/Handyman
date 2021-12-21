import React from 'react'
import { View, Text, TextInput, TouchableOpacity} from 'react-native'
export default function DataForm(props) {
    return (
        <View>
            <View style={{
            height:65,
            width:"100%",
            flexDirection:"row",
            alignItems:"center",
            }}>
                <View style={{
                    width:"20%",
                    flexDirection:"row",
                    justifyContent:"flex-end"
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
                    justifyContent:"flex-end"
                }}>
                <Text>Phone No.</Text>
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
                keyboardType='numeric'
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
                    justifyContent:"flex-end"
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
                    justifyContent:"flex-end"
                }}>
                <Text>Date of Birth</Text>
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
                    justifyContent:"flex-end"
                }}>
                <Text>Date of Joining</Text>
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
                    justifyContent:"flex-end"
                }}>
                <Text>Date of Leaving</Text>
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
                    justifyContent:"flex-end"
                }}>
                <Text>Address</Text>
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
                multiline={true}
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
                    justifyContent:"flex-end"
                }}>
                <Text>Pin Code</Text>
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
                keyboardType='numeric'
                />
            </View>

            <View style={{
            height:65,
            width:"100%",
            flexDirection:"row",
            alignItems:"center",
            // backgroundColor:"blue"
            }}>
                <View style={{
                    width:"20%",
                    flexDirection:"row",
                    justifyContent:"flex-end"
                }}>
                <Text>Address Prof</Text>
                <Text style={{color:'red'}}> *</Text>
                </View>

                <TouchableOpacity
                // onPress={}
                style={{
                    height:40,
                    width:100,
                    backgroundColor:"#f2f2f2",
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:5,
                    left:10
                }}>
                    <Text style={{color:'black'}}>Choose file</Text>
                </TouchableOpacity>
                
                <Text style={{left:20,color:'black'}}>No file chosen</Text>
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
                    justifyContent:"flex-end"
                }}>
                <Text>Photo</Text>
                <Text style={{color:'red'}}> *</Text>
                </View>

                <TouchableOpacity
                // onPress={}
                style={{
                    height:40,
                    width:100,
                    backgroundColor:"#f2f2f2",
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:5,
                    left:10
                }}>
                    <Text style={{color:'black'}}>Choose file</Text>
                </TouchableOpacity>
                
                <Text style={{left:20,color:'black'}}>No file chosen</Text>
            </View>
        </View>
    )
}