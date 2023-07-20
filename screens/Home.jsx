import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {colors, defaultStyles} from "../styles/styles";
import Header from "../components/Header";
import {Avatar, Button} from "react-native-paper";
import generateRandomUUID from "../utils/UUIDUtil";
import ProductCard from "../components/ProductCard";
import SearchModel from "../components/SearchModel";
import {useNavigation} from "@react-navigation/native";
import Footer from "../components/Footer";



const  categoriesUUID=Array(8).fill("").map(() => generateRandomUUID())
const Items =  ["Nike","Football","Man","Women","Kids","Shoes","Bags","Accessories"].map((item,index) => {
    return {
        _id: categoriesUUID[index],
        category: item
    }
})



const Home = () => {
    const categories = Items;
    const products =  [
        {
            _id: 'c96f4e62-6ff6-4ad0-99bc-872492b70b21',
            stock: 10,
            images: [
                { url: 'https://img.freepik.com/free-vector/japanese-teenager-students-wearing-uniform_52683-45010.jpg?w=1380&t=st=1689612188~exp=1689612788~hmac=65cb0e63d511b3871226c7e7b2bcd94b955a879467aa62b1934d0efa2db61497' },
                { url: 'https://i.pinimg.com/750x/c4/1c/d0/c41cd0c54867c36dcb20abac010216e8.jpg' }
            ],
            name: 'Nike',
            price: 9.99
        },
        {
            _id: '44d925dd-3900-482f-9b7e-b5436e66872e',
            stock: 10,
            images: [
                { url: 'https://img.freepik.com/free-photo/asian-collage-female-woman-smiling-cheerful-joy-face-expression-hand-hold-notebook-tablet-with-backpack-ready-schoolhappiness-positive-young-asia-woman-confident-smile-back-school-lifestyle_609648-3067.jpg?size=626&ext=jpg&ga=GA1.1.1898337990.1689612184&semt=ais' },
                { url: 'https://i.pinimg.com/750x/c4/1c/d0/c41cd0c54867c36dcb20abac010216e8.jpg' }
            ],
            name: 'Bag',
            price: 10.99
        },
        {
            _id: 'ac9fe9dc-b0dc-45f7-8e56-396bb97627c5',
            stock: 10,
            images: [
                { url: 'https://img.freepik.com/free-vector/cartoon-children-back-school-collection_23-2148222506.jpg?size=626&ext=jpg&ga=GA1.1.1898337990.1689612184&semt=ais' },
                { url: 'https://i.pinimg.com/750x/c4/1c/d0/c41cd0c54867c36dcb20abac010216e8.jpg' }
            ],
            name: 'Dockerhub',
            price: 18.99
        }
    ];



    {/*Defining STATES for the categories*/}
     const [category,setCategory] = useState("")
     const [activeSearch,setActiveSearch] = useState(false)
     const[searchQuery,setSearchQuery] = useState("")

    function categoryBtnHandler(categoryItemId) {
        setCategory(categoryItemId)
        console.log(categoryItemId)
    }


    const addToCartHandler = (id) => {
        console.log(id)
    }

    const navigate=useNavigation()

    return (
        <>
            {/*Search Model*/}

        {activeSearch && (
        <SearchModel
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setActiveSearch={setActiveSearch}
            products={products}
        />
        )}
            {/*End Search Model*/}

            {/*Main View*/}
        <View style={defaultStyles}>
            {/* Header */}
            <Header />
            {/*Heading Row*/}
           <View style={{
                paddingTop: "12%" ,
                flexDirection:"row",
               justifyContent:"space-between",
               alignItems:"center",
           }}>
               <View>
                   <Text style={{fontSize:25}}>Our</Text>
                   <Text style={{fontSize:25,fontWeight:"900"}}>Products</Text>
               </View>

               {/* Search Bar */}
               <TouchableOpacity onPress={()=>setActiveSearch((prevState=> !prevState))}>
                   <Avatar.Icon
                       icon={"magnify"}
                       color={"grey"}
                       size={50}
                       style={{backgroundColor: colors.color2, elevation:3,shadowOpacity: 0.2,shadowColor:'black',shadowOffset: { width: "1%", height: "1%" }}}/>
               </TouchableOpacity>
           </View>
            {/* End Heading Row */}


            {/* Categories */}
            <View style={{
                flexDirection:"row",
                height:"8%",
            }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={
                    {
                        alignItems:"center",
                    }
                }
                >
                    {categories.map((item,index) => (
                        <Button
                            key={item._id}
                            style={
                                {
                                    backgroundColor: category===item._id ? colors.skyblue: colors.color5,
                                    borderRadius: "60%",
                                    margin:5,

                                }
                            }
                            onPress={() => categoryBtnHandler(item._id)}
                        >
                            <Text
                                style={
                                    {
                                        fontSize:12,
                                        color: category===item._id ? colors.color2: "#808080",
                                    }
                                }
                            >
                                {item.category}

                            </Text>

                        </Button>
                    ))}

                </ScrollView>
            </View>

            {/* End Categories */}


            {/* Products */}
            <View style={{ flex: 1}}>

                <ScrollView horizontal showsVerticalScrollIndicator={false}>

                    {products.map((item,index) => (
                        <ProductCard
                            stock={item.stock}
                            name={item.name}
                            price={item.price}
                            image={item.images[0].url}
                            addToCartHandler={ addToCartHandler}
                            key={item._id}
                            id={item._id}
                            idx={index}
                            navigate={navigate}
                        />
                    ))}

                </ScrollView>
            </View>
            {/* End Products */}
        </View>
            {/*End Main View*/}

            {/*Footer*/}
            <Footer activeRoute={"home"} />
            {/*End Footer*/}
        </>
    );
}
export default Home
