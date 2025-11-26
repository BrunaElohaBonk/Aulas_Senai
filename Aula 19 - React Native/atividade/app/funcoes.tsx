import { app } from "@/firebaseConfig";
import { Link, router, useNavigation } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, Dimensions } from "react-native"

export default function Funcoes() {

    const navigate = useNavigation()

    const handleNavigate = () => {
        router.navigate('/list')
    }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.fundo}>
        <View style={{justifyContent:"center", alignItems: "center"}}>
          <Text style={styles.login}>O que deseja fazer</Text>
        </View>
        <View style={{height: '10%'}}></View>
        <View style={{height:'5%', alignItems:"center"}}>
          <TouchableOpacity style={styles.botao}>
            <View>
              <Link href={'/home'} style={{color: "#FFFFFF"}}>Cadastrar gatinho</Link>
            </View>
          </TouchableOpacity>
          <View style={{height: '100%'}}></View>
        </View>
        <View style={{height: '80%'}}></View>
      </View>
       <View>
            <Link href={'/list'}>Listar</Link>
        </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  imagem: {
    height: 15,
    width: 15
  },

  botao: {
    borderRadius: 15,
    backgroundColor: "#8A8A8A",
    height: 50,
    width: 130,
    justifyContent: "center",
    alignItems: "center"
  },

  caixa_texto: {
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    color: "#8A8A8A",
    margin: 5,
    height: 50,
    width: 250
  },

  fundo: {
    backgroundColor: "#eef3ef",
    height: 550,
    width: 400,
    borderRadius: 30,
    flexDirection: "column"
  },

  login: {
    fontSize: 20,
    color: "#8A8A8A",
    marginTop: 60,
    fontWeight: "bold"
  }
});