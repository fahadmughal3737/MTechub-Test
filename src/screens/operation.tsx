import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native'
import { GetAllProducts } from '../api/getAllProducts'
import useSelector from 'redux'
import { UserContext } from '../../App'

export const Operation = (props:any) => {
    const [load, setLoad] = useState(true)
    const [products, setProducts] = useState<any>([])
    // const quanity = useSelector(state => state.quanity)
    const { quantity, setQuantity } = useContext(UserContext)

    console.log('quantity check', quantity)



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity style={{ height: 50, width: 100, borderRadius: 10, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', }} onPress={() => { setQuantity(quantity - 1) }}>
                    <Text>Decrement</Text>
                </TouchableOpacity>
                <Text>{quantity}</Text>
                <TouchableOpacity style={{ height: 50, width: 100, borderRadius: 10, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', }} onPress={() => { setQuantity(quantity + 1) }}>
                    <Text>Increment</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {props.navigation.navigate('Cart')}} style={{ height: 50, marginTop:50, width: 100, borderRadius: 10, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', }} >
                <Text>Go back</Text>
            </TouchableOpacity>

        </View>
    )
}