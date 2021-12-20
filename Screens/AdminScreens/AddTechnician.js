import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
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
                height:650,
                top:30,
            }}>
                <DataForm/>
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
    )
}

export default AddTechnician

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})
