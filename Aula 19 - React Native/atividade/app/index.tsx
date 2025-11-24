import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, Dimensions, Alert } from "react-native"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { Link, router } from "expo-router";
import Swal from 'sweetalert2';

export default function HomeScreen() {

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.fundo}>
        <Text style={styles.bem_vindo}>Bem-Vindo</Text>
      </View>
      <View style={{height: '68%'}}>
        <View style={{height:'10%'}}></View>
        <View style={{flexDirection:'column', alignItems: 'center'}}>
          <Text style={styles.texto}>Que bom ter você aqui!</Text>
          <View style={{height:'5%'}}></View>
          <Image style={{height: 250, width: 125, borderRadius: 40}} source={require('../assets/images/gato_maquiavelico.webp')}></Image>
        </View>
        <View style={{height: '9%'}}></View>
        <View style={{justifyContent: 'center', alignItems: 'center', height: '7%', color: '#8A8A8A'}}>Você pode</View>
        <View style={{flexDirection:'row', backgroundColor: '#eef3ef', borderRadius: 15, height: 50, width: 300, justifyContent: 'center', alignItems: 'center'}}>
          <Link href={'/login'} style={{color:'#8A8A8A', fontSize: 15, textDecorationLine: 'underline'}}>Fazer login</Link>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', height: '7%', color: '#8A8A8A'}}>Ou</View>
        <View style={{flexDirection:'row', backgroundColor: '#eef3ef', borderRadius: 15, height: 50, width: 300, justifyContent: 'center', alignItems: 'center'}}>
          <Link href={'/cadastro'} style={{color:'#8A8A8A', fontSize: 15, textDecorationLine: 'underline'}}>Cadastrar</Link>
        </View>
      </View>
      <View style={{backgroundColor: "#eef3ef", justifyContent: "flex-end", alignItems: 'center', width: '100%', height: '7%'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  bem_vindo: {
    fontSize: 80,
    color: "#8A8A8A",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"
  },

  texto: {
    fontSize: 20,
    color: "#8A8A8A",
    fontStyle: 'italic',
    justifyContent: "center",
    alignItems: "center"
  },

  fundo: {
    backgroundColor: "#eef3ef",
    justifyContent: "center",
    alignItems: 'center', 
    width: '100%',
    height: '25%'
  }
});