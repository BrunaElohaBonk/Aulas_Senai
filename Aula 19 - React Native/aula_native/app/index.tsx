import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from "react-native"

// EXEMPLO 1
// export default function HomeScreen() {
//   return(
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//       <Text style={styles.colorBlue}>Hello World!</Text>
//       <br />
//       <View style={styles.square}></View>
//     </View>
//   );
// }

// EXEMPLO 2
export default function App(){

  const [text, setText] = useState("")

  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={styles.colorBlue}>Hello World!</Text><br />
      <View style={styles.square}></View><br />
      <TextInput placeholder="Digite aqui..." onChangeText={text => setText(text)}></TextInput>
      <br />
      {/* OPÇÃO 1 PARA BOTÃO */}
      <TouchableOpacity>
        <View>
          <Text>Botao aqui</Text>
        </View>
      </TouchableOpacity><br />
      {/* OPÇÃO 2 PARA BOTÃO */}
      <Button title="Press Me" onPress={() => console.log("olá")}></Button>
      <br />
      <Image 
        style={styles.image}
        source={require('../assets/images/empadao.jpg')}
      />
    </View>
  );
}

// ESTILOS
const styles = StyleSheet.create({
  colorBlue: {
    color: "blue", 
    fontSize: 25 
  },
  square: {
    height: 300,
    width: 300,
    backgroundColor: "rebeccapurple"
  },
  image: {
    width: 300,
    height: 300
  }
})