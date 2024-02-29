import { StyleSheet, View } from "react-native";
import FotoPerfil from "../instagram/src/assets/timao.png"
import InfoProfile from "./src/components/InfoProfile";

export default function App(){
  return (
      <View style={styles.container}>
          <InfoProfile
          image = {FotoPerfil}
          publi = {105}
          followers = {1200}
          following = {100}
          descriptions="Thz"/>
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
})