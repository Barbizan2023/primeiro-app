import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Logo from './assets/logoinst.png';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{ width: 200, height: 60 }} source={Logo} />
        <StatusBar style="auto" />
        <View style={styles.edit}>
          <TouchableOpacity><AntDesign name="hearto" size={35} color="black" style={{}} /></TouchableOpacity>
          <TouchableOpacity><Feather name="message-circle" size={35} color="black" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ gap: 8, height: 100, }} horizontal
        style={{ flexDirection: "row", gap: 16, marginHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity >
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg"
            }}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://classic.exame.com/wp-content/uploads/2023/01/GettyImages-1456701029-1.jpg?quality=70&strip=info&w=1024"
            }}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg"
            }}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://classic.exame.com/wp-content/uploads/2023/01/GettyImages-1456701029-1.jpg?quality=70&strip=info&w=1024"
            }}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg"
            }}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://classic.exame.com/wp-content/uploads/2023/01/GettyImages-1456701029-1.jpg?quality=70&strip=info&w=1024"
            }}></Image>
        </TouchableOpacity>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    flexDirection: 'row',
    padding: 10,
    gap: 5,
  },

});
