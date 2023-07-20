import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'

import {colors, productCardStyles} from "../styles/styles";
import {Button} from "react-native-paper";

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

        <TouchableOpacity
            activeOpacity={1}
            onPress={()=>navigate.navigate("productdetails",{id})}>
            <View

            style={{
                ...productCardStyles,
                backgroundColor: idx % 2 === 0 ? colors.color1 : colors.color2
            }}
            >

               <Image

                   source={{
                          uri: image
                   }}
                   style={{
                          width: "100%",
                          height: 200,
                       resizeMode: "contain",
                       position: "absolute",
                       left:50,
                       top: 105,
                   }}
               />


                <View style={
                    {
                        flexDirection: "row",
                        padding: 20,
                        justifyContent: "space-between",
                        width: "100%",
                    }
                }>

                    <Text numberOfLines={2} style={
                        {
                            color: idx % 2 === 0 ? colors.color2 : colors.color1,
                            fontSize: 25,
                            fontWeight: "300",
                        }
                    }>{name}</Text>

                    <Text numberOfLines={2} style={
                        {
                            color: idx % 2 === 0 ? colors.color2 : colors.color1,
                            fontSize: 20,
                            fontWeight: "700",
                        }
                    }>${price}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: idx % 2 === 0 ? colors.color2 : colors.color1,
                        borderRadius: 0,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        width: "100%",
                    }}
                >
                    <Button

                        onPress={addToCartHandler(id,stock)}
                        textColor={
                        idx % 2 === 0 ? colors.color1 : colors.color2
                    }>
                        Add To Cart</Button>

                </TouchableOpacity>




            </View>
        </TouchableOpacity>

    )
}
export default ProductCard
