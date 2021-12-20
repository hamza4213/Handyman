import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import DataForm from '../../Components/DataForm'

const AddTechnician = () => {
    return (
        <View style={styles.container}>
            
            <View style={{
                top:25,
                height:50,
                width:"95%",
                backgroundColor:"#3A8EC0",
                justifyContent:"center",
                left:10
            }}
            >
                <Text style={{color:'white',fontWeight:"bold",fontSize:18,left:10}}>Add Technician</Text>
            </View>

            <View style={{
                backgroundColor:"blue",
                height:"90%"
            }}>
                <DataForm/>
            </View>

            {/* <View style={{
                height:50,
                width:"100%",
                top:35,
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"blue"
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
                        top:40
                    }}
                    >
                        <Text style={{color:'white',fontSize:18}}>Save</Text>
                    </TouchableOpacity>
            </View> */}
        </View>
    )
}

export default AddTechnician

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        flex:1,
        backgroundColor:'#fff'
    }
})
