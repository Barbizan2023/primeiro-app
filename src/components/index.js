import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Post from "../../assets/giannis.jpg"
gia
export default function MyPosts() {
    return(
        <View>
            <View>
                <TouchableOpacity>
                <MaterialIcons name="grid-on" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name="movie-open-play-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.icons}> 
                <Image source={Post} style={StyleSheet.image}/>
                <Image source={Post} style={StyleSheet.image}/>
                <Image source={Post} style={StyleSheet.image}/>
                <Image source={Post} style={StyleSheet.image}/>
                <Image source={Post} style={StyleSheet.image}/>
                <Image source={Post} style={StyleSheet.image}/>
                <Image source={Post} style={StyleSheet.image}/>
                <Image source={Post} style={StyleSheet.image}/>
                <Image source={Post} style={StyleSheet.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icons: {justifyContent: "space-around", flexDirection: "row", },
    image: { width: "33.3%", heigth:120, borderColor: "white", borderWidth: 1},
    post: {flexDirection:"row", flexWrap: "wrap",  marginTop: 15}
});
