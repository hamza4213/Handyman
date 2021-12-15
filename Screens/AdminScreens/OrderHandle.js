import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default function OrderHandle() {
    return (
        <View style={styles.container}>
            
            <View style={{
                height:"10%",
                // backgroundColor:"blue",
                marginTop:"8%",
                alignItems:"center"
            }}>
                    <Text style={{
                        fontWeight:"bold",
                        fontSize:20
                    }}>
                        Admin Order Close, Edit, Assign Reassign Technician & Reject order
                    </Text>
            <TextInput style={{
                 height: 40,
                 margin: 12,
                 borderWidth: 1,
                //  padding: 10,
                width:"100%"
            }}
            />        
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