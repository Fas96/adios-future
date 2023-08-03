import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { useIsFocused } from "@react-navigation/native";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
    size: 20,
    style: {
        borderRadius: 5,
        backgroundColor: colors.color5,
        height: 25,
        width: 25,
    },
};


const images=[
    {id:"asasjgjagsjahgs",url:"https://images.unsplash.com/photo-1529394187359-bc4d0d8c8321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"},
    {id:"ajdsgkabjsdjasgdkasd",url:"https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
]

const ProductDetails = ({ route: { params } }) => {


    const isCarousel = useRef(null);
    const [quantity, setQuantity] = useState(1);

    const isFocused = useIsFocused();


    return (
        <View
            style={{
                ...defaultStyle,
                padding: 0,
                backgroundColor: colors.color1,
            }}
        >
            <Header back={true} />

            {/* Carousel */}
            <Carousel
                layout="stack"
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                ref={isCarousel}
                data={images}
                renderItem={CarouselCardItem}
            />


        </View>
    );
};

const CarouselCardItem = ({ item, index }) => (
    <View style={style.container} key={index}>
        <Image source={{ uri: item.url }} style={style.image} />
    </View>
);

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        width: ITEM_WIDTH,
        paddingVertical: 40,
        height: 380,
    },
    image: {
        width: ITEM_WIDTH,
        resizeMode: "contain",
        height: 250,
    },
    quantity: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: "center",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color5,
    },
    btn: {
        backgroundColor: colors.color3,
        borderRadius: 100,
        padding: 5,
        marginVertical: 35,
    },
});
export default ProductDetails;