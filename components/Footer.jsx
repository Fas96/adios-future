import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
import {colors, footerBaseStyle} from "../styles/styles";
import {Avatar} from "react-native-paper";

const Footer = (activeRoute="home") => {
    const  navigate = useNavigation();

    //if data is loading true, if done loading false to control the footer
    const isAuthenticated = false;

    const  loading = false;

    const navigateHandler = (key) => {

        switch (key) {
            case 0:
                navigate.navigate("home")
                break;
            case 1:
                navigate.navigate("cart")
                break;
            case 2:
                if(isAuthenticated)navigate.navigate("profile");
                else navigate.navigate("login");
                break;
            default:
                navigate.navigate("home")
        }

    }

    const avatarOptionProperties =
        {
            color:colors.color2,
            style:{backgroundColor:colors.color1},
            size: 50
        }


    return (
        loading===false && (
        <View style={{
            backgroundColor: colors.color1,
            borderTopRightRadius:120,
            borderTopLeftRadius:120,
            padding:"2%",

        }}>

            <View
            style={{
                flexDirection:"row",
                justifyContent:"space-evenly",
            }}
            >
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigateHandler(1)}>
                    <Avatar.Icon icon={activeRoute==="cart"?"shopping":"shopping-outline"}
                                 {...avatarOptionProperties}
                    />

                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigateHandler(2)}>
                    <Avatar.Icon
                        icon={activeRoute==="profile"?"account":"account-outline"}
                                 color={colors.color2}
                                 style={{backgroundColor:colors.color1}}
                                 size={50}
                    />

                </TouchableOpacity>
            </View>
            <View
            style= {footerBaseStyle}
            >
                <View style={{
                    borderRadius:100,
                    justifyContent:"center",
                    alignItems:"center",
                }}>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigateHandler(0)}>
                        <Avatar.Icon
                            icon={activeRoute==="home"?"home":"home-outline"}
                            {...avatarOptionProperties}
                        />

                    </TouchableOpacity>

                </View>

            </View>

        </View>
    ))
}
export default Footer
