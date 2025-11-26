import { app } from "@/firebaseConfig";
import { Link, router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, Dimensions } from "react-native"

export default function Login() {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmSenha, setConfirmSenha] = useState("")
  const screenWindth = Dimensions.get("window").width;

  const auth = getAuth(app)

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, senha)
    router.navigate('/funcoes')
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.fundo}>
        <View style={{justifyContent:"center", alignItems: "center"}}>
          <Text style={styles.login}>Login</Text>
        </View>
        <View style={{height: '5%'}}></View>
        <View style={{height: '30%', justifyContent: "center", alignItems:"center"}}>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Usuário" onChangeText={user => setEmail(user)}></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} secureTextEntry placeholder="   Senha" onChangeText={senha => setSenha(senha)}></TextInput>
          </View>
        </View>
        <View style={{height:'5%', alignItems:"center"}}>
          <TouchableOpacity style={styles.botao} onPress={signIn}>
            <View>
              <Text style={{color: "#FFFFFF"}}>Entrar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height:'17%', alignItems:"center"}}>
          <Text style={{color: "#8A8A8A", margin: 15, textDecorationLine: 'underline'}}>Esqueceu a senha?</Text>
          <View style={{height: '70%'}}></View>
          <View style={{height:'25%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontStyle: 'italic', color: '#8A8A8A'}}>Ou entre com:</Text>
            <View style={{height: '2%'}}></View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{flexDirection:'row', alignItems: 'center', marginRight: 10}}>
                <Image style={styles.imagem} source={require('../assets/images/Google.png')}/>
                <Text style={{color: "#8A8A8A", textDecorationLine: 'underline'}}> Google</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems:'center', marginLeft: 10}}>
                <Image style={styles.imagem} source={require('../assets/images/Facebook.png')}/>
                <Text style={{color: "#8A8A8A", textDecorationLine: 'underline'}}> Facebook</Text>
                </View>
            </View>
            <View style={{height: '100%'}}></View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontStyle: 'italic', color: '#8A8A8A'}}>Não tem uma conta?  </Text>
              <Link href={'/cadastro'} style={{color: "#8A8A8A", textDecorationLine: 'underline'}}>Cadastrar</Link>
            </View>
            <View style={{height: '80%'}}></View>
            <View>
              <Link href={'/'} style={{color: "#8A8A8A", textDecorationLine: 'underline'}}>Voltar para a tela inicial</Link>
            </View>
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
    height: 30,
    width: 70,
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