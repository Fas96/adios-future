import {
    View,
    Text,
    StatusBar,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    BackHandler
} from 'react-native'
import React, {useEffect} from 'react'
import {useNavigation} from "@react-navigation/native";
import {colors, searchModelBaseStyle} from "../styles/styles";
import {Headline, Searchbar} from "react-native-paper";

const searchQuery={searchQuery}
const setSearchQuery={setSearchQuery}
const setActiveSearch={setActiveSearch}


const SearchModel = ({searchQuery,setSearchQuery,setActiveSearch,products=[]}) => {
    const navigate = useNavigation();


    //this is the handler for android back button
    const backAction = () => {
        setActiveSearch(false)
        setSearchQuery("")
        return true;
    }

    //This is for android back button
    //and prevents the app from closing on back button press
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        };
    }, []);


    return (
            <View  style={
                {
                    position:"absolute",
                    top:1,
                    width:"100%",
                    height:"100%",
                    zIndex:100,
                    backgroundColor: colors.color2,
                    padding:"2%",
                    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                }
            }>
                <SafeAreaView>

                    <Searchbar
                               placeholder="Search..."
                               onChangeText={(content)=>setSearchQuery(content)}
                               value={searchQuery}
                               style={ {marginTop:"2%"}}
                    />

                    <ScrollView>

                        <View style={{
                            paddingVertical:"10%",
                            paddingHorizontal:"5%",
                        }}>

                            {products.map((item,index) => (
                               <SearchItem
                                   key={item._id}
                                   imgSrc={item.images[0]?.url}
                                   name={item.name}
                                   price={item.price}
                                   handler={()=>navigate.navigate("productdetails",{id:item._id})}

                               />
                            ))}

                        </View>


                    </ScrollView>
                </SafeAreaView>
            </View>

    )
}

const productdetails=(productdetails)=> {
    console.log(productdetails)
    console.log("productdetails")
}
const SearchItem = ({imgSrc,name,price,handler}) => (
    <TouchableOpacity onPress={handler}>
        <View style={searchModelBaseStyle}>


        <Image source={{
            uri:imgSrc
        }}
        style={{
            width: 80,
            height: 80,
            position: "absolute",
            resizeMode: "contain",
            top: -15,
            left: 10,
            borderTopLeftRadius:20,
            borderBottomRightRadius:20,
            borderRadius: 40,
        }}
        />

        <View style={{
            width:"80%",
            paddingHorizontal:"10%",
        }}>
            <Text numberOfLines={1}>{name}</Text>
            <Headline
                numberOfLines={1}
                style={{fontWeight:"800"}}
            >
                ${price}

            </Headline>

        </View>

        </View>

    </TouchableOpacity>
);
export default SearchModel
