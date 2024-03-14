import { StyleSheet, View } from "react-native";
import FotoPerfil from "../assets/timao.png";
import InfoProfile from "../components/InfoProfile";
import MyPosts from "../components/MyPosts";

export default function Profile(){
  return (
      <View style={styles.container}>
          <InfoProfile
          image = {FotoPerfil}
          publi = {105}
          followers = {1200}
          following = {100}
          descriptions="Vinicius"
          MaterialCommunityIcons="grid-on"/>
          <MyPosts/>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#fff',
      marginHorizontal:16,
      marginVertical:35,
  },
});