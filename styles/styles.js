import  {StyleSheet,Platform,StatusBar}  from "react-native";

export  const colors = {
    color1: "#c70049",
    color1_light: "rgba(227, 25, 99)",
    color1_light2: "rgba(199,0,73,0.8)",
    color2: "#FFFFFF",
    color3: "rgba(45,45,45)",
    color4: "transparent",
    color5: "#f2f2f2",
    color6: "#f7f7f7",
    skyblue: "#87ceeb",
}

export const defaultStyles = StyleSheet.create({
    padding: "2%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2,
});

export const inputStyles = StyleSheet.create({
    height: 50,
    backgroundColor: colors.color2,
    marginVertical: 10,
    marginHorizontal: 20,
});

export  const footerBaseStyle={
    position:"absolute",
    width:80,
    height:80,
    backgroundColor:colors.color2,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    top:-50,
    alignSelf:"center",
}


export const productCardStyles ={
    elevation:5,
    width: 220,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    borderRadius: 20,
    height: 400,
    //added for the shadow
    shadowOpacity: 0.2,
    shadowColor:'black',
    shadowOffset: { width: "1%", height: "1%" },
    //end of shadow
}

export const searchModelBaseStyle = {
    padding:20,
    borderRadius:10,
    backgroundColor: colors.color2,
    // added for the shadow
    elevation:5,
    shadowOpacity: 0.2,
    shadowColor:'black',
    shadowOffset: { width: "1%", height: "1%" },
    // end of shadow

    width:"100%",
    alignItems:"center",
    justifyContent:"flex-end",
    flexDirection: "row",
    marginVertical:30
}