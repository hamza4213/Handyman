import React from 'react'
import { View, Text } from 'react-native'

export default function EditDetails() {
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
                <Text style={{color:'white',fontWeight:"bold",fontSize:18,left:10}}>Edit Technician</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})
