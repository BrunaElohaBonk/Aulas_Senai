import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from "react-native"

export default function HomeScreen() {

  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View style={styles.fundo}>
        <Text style={styles.login}>Login</Text>
        <TextInput placeholder="Digite o usuário aqui:" onChangeText={user => setUser(user)}></TextInput>
        <TextInput placeholder="Digite a senha aqui:" onChangeText={senha => setSenha(senha)}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#eef3ef",
    height: 550,
    width: 400,
    borderRadius: 30,
    justifyContent: "center", 
    flexDirection: "row"
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 35
  },
  caixa_texto: {
    backgroundColor: "#c3d2e3"
  }
});
