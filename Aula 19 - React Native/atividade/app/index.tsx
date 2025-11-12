// import { useState } from "react";
// import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from "react-native"

// export default function HomeScreen() {

//   const [user, setUser] = useState("")
//   const [senha, setSenha] = useState("")

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <View style={styles.fundo}>
//         <View style={{height: '10%'}}></View>
//         <View style={{height: '5%', justifyContent:"center", alignItems: "center"}}>
//           <Text style={styles.login}>Login</Text>
//         </View>
//         <View style={{height: '5%'}}></View>
//         <View style={{height: '40%', justifyContent: "center", alignItems:"center"}}>
//           <View style={{ flexDirection: "row" }}>
//             <TextInput style={styles.caixa_texto} placeholder="   Usuário" onChangeText={user => setUser(user)}></TextInput>
//           </View>
//           <View style={{ flexDirection: "row" }}>
//             <TextInput style={styles.caixa_texto} placeholder="   Senha" onChangeText={senha => setSenha(senha)}></TextInput>
//           </View>
//         </View>
//         <View style={{height:'7%', alignItems:"center"}}>
//           <TouchableOpacity style={styles.botao}>
//             <View>
//               <Text style={{color: "#FFFFFF"}}>Entrar</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={{height:'17%', alignItems:"center"}}>
//           <Text style={{color: "#8A8A8A", margin: 15, textDecorationLine: 'underline'}}>Esqueceu a senha?</Text>
//           <Text style={{color: "#8A8A8A", textDecorationLine: 'underline'}}>Cadastrar</Text>
//         </View>
//         <View style={{height:'15%', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
//           <View style={{flexDirection:'row', alignItems: 'center', marginRight: 10}}>
//             <Image style={styles.imagem} source={require('../assets/images/Google.png')}/>
//             <Text style={{color: "#8A8A8A", textDecorationLine: 'underline'}}> Google</Text>
//           </View>
//           <View style={{flexDirection: 'row', alignItems:'center', marginLeft: 10}}>
//             <Image style={styles.imagem} source={require('../assets/images/Facebook.png')}/>
//             <Text style={{color: "#8A8A8A", textDecorationLine: 'underline'}}> Facebook</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   imagem: {
//     height: 15,
//     width: 15
//   },

//   botao: {
//     borderRadius: 5,
//     backgroundColor: "#8A8A8A",
//     height: 30,
//     width: 70,
//     justifyContent: "center",
//     alignItems: "center"
//   },

//   caixa_texto: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 7,
//     color: "#8A8A8A",
//     margin: 5,
//     height: 50,
//     width: 250
//   },

//   fundo: {
//     backgroundColor: "#eef3ef",
//     height: 550,
//     width: 400,
//     borderRadius: 30,
//     justifyContent: "center",
//     flexDirection: "column"
//   },

//   login: {
//     fontSize: 20,
//     color: "#8A8A8A",
//     fontWeight: "bold",
//     marginTop: 35,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });




import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image } from "react-native"

export default function HomeScreen() {

  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.fundo}>
        <View style={{height: '10%'}}></View>
        <View style={{height: '5%', justifyContent:"center", alignItems: "center"}}>
          <Text style={styles.cadastro}>Cadastro</Text>
        </View>
        <View style={{height: '5%'}}></View>
        <View style={{height: '55%', justifyContent: "center", alignItems:"center"}}>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Usuário" onChangeText={user => setUser(user)}></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Email" onChangeText={senha => setSenha(senha)}></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Senha" onChangeText={senha => setSenha(senha)}></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.caixa_texto} placeholder="   Confirme a senha" onChangeText={senha => setSenha(senha)}></TextInput>
          </View>
        </View>
        <View style={{height:'7%', alignItems:"center"}}>
          <TouchableOpacity style={styles.botao}>
            <View>
              <Text style={{color: "#FFFFFF"}}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height: '5%'}}></View>
        <View style={{height: '5%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: "#8A8A8A"}}>Ou cadastre com:</Text>
        </View>
        <View style={{height: '2%'}}></View>
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