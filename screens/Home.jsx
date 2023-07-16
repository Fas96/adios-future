import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {colors, defaultStyles} from "../styles/styles";
import Header from "../components/Header";
import {Avatar} from "react-native-paper";

const Home = () => {
    return (
        <View style={defaultStyles}>
            {/* Header */}
            <Header />
           <View style={{
               paddingTop:70,
                flexDirection:"row",
               justifyContent:"space-between",
               alignItems:"center",
           }}>
               <View>
                   <Text style={{fontSize:25}}>Our</Text>
                   <Text style={{fontSize:25,fontWeight:"900"}}>Products</Text>
               </View>

               {/* Search Bar */}
               <TouchableOpacity>
                   <Avatar.Icon
                       icon={"magnify"}
                       color={"grey"}
                       size={50}
                       style={{backgroundColor: colors.color2, elevation:12}}/>
               </TouchableOpacity>
           </View>
        </View>
    )
}
export default Home
