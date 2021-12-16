import React from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
const check = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <View>
            <Text>Jfhcvdiufvbh</Text>
            <Text>{count}</Text>
        </View>
    )
}

export default check
