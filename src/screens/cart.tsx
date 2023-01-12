import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native'
import { GetAllProducts } from '../api/getAllProducts'
import useSelector from 'redux'
import { UserContext } from '../../App'

export const Cart = (props: any) => {
    const [load, setLoad] = useState(true)
    const [products, setProducts] = useState<any>([])
    // const quanity = useSelector(state => state.quanity)
    const { quantity, setQuantity } = useContext(UserContext)

    console.log('quantity check', quantity)
    useEffect(() => {
        GetAllProducts()
            .then((res: any) => {
                if (res) {
                    res.map((data: any, index: number) => {
                        console.log('inside map')
                        products.push(data)
                    })
                }
                if (products.length > 0) {
                    console.log('inside if')
                    setLoad(false)
                }
            })
            .catch((e: any) => {
                Alert.alert('error')
            })
    }, [])


    return (
        <View style={{ flex: 1, padding: 5 }}>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Products List</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>
                {load ?
                    <ActivityIndicator size={'large'} style={{ marginTop: '2%' }} />

                    :
                    <View style={{ justifyContent: 'center', flexWrap: 'wrap', padding: 5, flexDirection: 'row', }}>
                        {products.map((data: any, index: number) => {
                            return (
                                <TouchableOpacity onPress={() => { props.navigation.navigate('Operation', {obj:data}) }} style={{ margin: 5, padding: 5, backgroundColor: 'lightgreen', borderRadius: 10, elevation: 2.5,  width: 200 }}>
                                    <Text adjustsFontSizeToFit>{'Product Name: ' + data.name}</Text>
                                    <Text adjustsFontSizeToFit>{'Product Price: ' + data.price}</Text>

                                    <Text adjustsFontSizeToFit>{'Product Description: ' + data.description}</Text>
                                    <Text style={{fontSize:24, fontWeight:'bold'}}>{'Quantity: ' + quantity}</Text>
                                </TouchableOpacity>
                            )
                        })}

                    </View>
                }
            </ScrollView>
        </View>
    )
}