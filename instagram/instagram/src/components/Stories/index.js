import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Fake1 from "../../assets/lebron1.jpg";
import Fake2 from "../../assets/lebron2.webp";


export default function Stories() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Story image={Foto1} />
      <Story image={Foto2} />
      <Story image={Foto1} />
      <Story image={Foto2} />
      <Story image={Foto1} />
      <Story image={Foto2} />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    height: 100,
  },
});