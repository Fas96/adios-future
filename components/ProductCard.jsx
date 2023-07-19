import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

import {colors} from "../styles/styles";

const ProductCard = ({

                         stock ,
                         name ,
                         price ,
                         image ,
                         addToCartHandler ,
                         id ,
                         idx ,
                         navigate
                     }) => {
    return (

        <TouchableOpacity onPress={()=>navigate.navigate("productdetails",{id})}>
            <View

            style={{
                elevation:5,
                width: 220,
                alignItems: "center",
                justifyContent: "space-between",
                margin: 20,
                borderRadius: 20,
                height: 400,
                backgroundColor: idx % 2 === 0 ? colors.color1 : colors.color2,
            }}
            >

            </View>
        </TouchableOpacity>

    )
}
export default ProductCard
