import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, Dimensions } from "react-native"

export default function Login() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.fundo}>
        <View style={{height:'3.7%'}}></View>
        <View style={{alignItems: 'center', flexDirection: 'row', justifyContent:'space-between', width:'95%'}}>
            <Image style={{height:15, width:15, marginLeft:25}} source={require('../assets/images/seta.png')}/>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                <Text style={{color: '#FFFFFF'}}>TOCANDO DO ÁLBUM</Text>
                <Text style={{color: '#FFFFFF'}}>Zé Neto e Cristiano</Text>
            </View>
            <Image style={{height:30, width:15}} source={require('../assets/images/3 pontos.png')}/>
        </View>
        <View style={{height:'7%'}}></View>
        <View style={{alignItems:'center'}}> 
            <Image source={require('../assets/images/images.jpg')}/>
        </View>
        <View style={{height:'5%'}}></View>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%'}}>
            <View>
                <Text style={{color:'#FFFFFF', fontWeight: 'bold', fontSize: 16}}>       Pátio do Posto</Text>
                <Text style={{color:'#FFFFFF', fontSize: 10}}>           Zé Neto e Cristiano</Text>
            </View>
            <Image style={{height:25, width:25, top:7}} source={require('../assets/images/coracao.png')}/>
        </View>
        <View style={{height:'3%'}}></View>
        <View style={{alignItems:'center'}}>
            <Image style={{height:120, width:310}} source={require('../assets/images/som.png')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#1f1f1f",
    height: 550,
    width: 370,
    borderRadius: 30,
    flexDirection: "column"
  }
});