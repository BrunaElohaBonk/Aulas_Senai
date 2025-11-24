import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, Dimensions, Alert } from "react-native"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { Link, router } from "expo-router";
import Swal from 'sweetalert2';

export default function Cadastro() {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmSenha, setConfirmSenha] = useState("")
  //const screenWindth = Dimensions.get("window").width;
  const minSenha = 6;

  const auth = getAuth(app)
    
    // const singUp = () => {
    //   if(senha === confirmSenha){
    //     return createUserWithEmailAndPassword(auth, email, senha)
    //   }
    //   else {
    //     return alert("Erro!")
    //   }
    // }

    const singUp = async () => {
      if(senha.length >= minSenha) {
        if(senha === confirmSenha){
          try {
            await createUserWithEmailAndPassword(auth, email, senha)
            Swal.fire({
              icon: "success",
              title: "Sucesso",
              text: "Usuário registrado!",
            });
              return router.navigate('/login')
          }
          catch(e){
            return Swal.fire({
              icon: "error",
              title: "Erro",
              text: "Email já existente!",
            });
          }
        }
        else {
          return Swal.fire({
            icon: "error",
            title: "Erro",
            text: "As senhas não coincidem",
        });
        }
      }
      else{
        return Swal.fire({
            icon: "error",
            title: "Erro",
            text: "A senha deve ter no mínimo 6 caracteres!",
        });
      }
    }

  useEffect(() => {
    console.log(user, email, senha, confirmSenha)
  }, [user, email, senha, confirmSenha])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.fundo}>
        <View style={{height: '10%'}}></View>
        <View style={{height: '5%', justifyContent:"center", alignItems: "center"}}>
          <Text style={styles.cadastro}>Cadastro</Text>
        </View>
        <View style={{height: '3%'}}></View>
        <View style={{height: '55%', justifyContent: "center", alignItems:"center"}}>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Usuário" onChangeText={user => setUser(user)}></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Email" onChangeText={email => setEmail(email)}></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Senha" secureTextEntry onChangeText={senha => setSenha(senha)}></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Confirme a senha" secureTextEntry onChangeText={confirmSenha => setConfirmSenha(confirmSenha)}></TextInput>
          </View>
        </View>
        <View style={{height:'7%', alignItems:"center"}}>
          <TouchableOpacity style={styles.botao} onPress={() => singUp()}>
            <View>
              <Text style={{color: "#FFFFFF"}}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height: '3.5%'}}></View>
        <View style={{height: '5%', justifyContent: 'center', alignItems: "center", flexDirection: "row"}}>
          <Text style={{color: '#8A8A8A', fontStyle: 'italic'}}>Já tem uma conta? </Text>
          <Link href={'/login'} style={{color: "#8A8A8A", textDecorationLine: 'underline'}}>Entrar</Link>
        </View>
        <View style={{height: '3%'}}></View>
        <View style={{height: '5%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: "#8A8A8A", fontStyle: 'italic'}}>Ou cadastre com:</Text>
        </View>
        <View style={{height:'15%', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
          <View style={{flexDirection:'row', alignItems: 'center', marginRight: 10}}>
            <Image style={styles.imagem} source={require('../assets/images/Google.png')}/>
            <Text style={{color: "#8A8A8A", textDecorationLine: 'underline'}}> Google</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems:'center', marginLeft: 10}}>
            <Image style={styles.imagem} source={require('../assets/images/Facebook.png')}/>
            <Text style={{color: "#8A8A8A", textDecorationLine: 'underline'}}> Facebook</Text>
          </View>
        </View>
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
    borderRadius: 5,
    backgroundColor: "#8A8A8A",
    height: 40,
    width: 80,
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
    justifyContent: "center",
    flexDirection: "column"
  },

  cadastro: {
    fontSize: 20,
    color: "#8A8A8A",
    fontWeight: "bold",
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center"
  }
});