import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from '../firebaseConfig';
import { Link } from "expo-router";

export default function Home() {

  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [raca, setRaca] = useState('');
  const [cor, setCor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  async function registrarGato() {
    try {
      
      if (!nome || !dataNasc || !raca || !cor) {
        console.log("Preencha nome, data de nascimento, raça e cor.");
        return;
      }

      const gato = {
        nome,
        dataNasc,
        imageUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await addDoc(collection(db, "gatos"), gato);
      console.log("Gatinho cadastrado!");

    } catch (err) {
      console.log("Erro ao cadastrar:", err);
    }
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      
      <Text style={{ 
        fontSize: 26, 
        fontWeight: "bold",
        marginBottom: 20 
      }}>
        Cadastrar Gatinho
      </Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#888"
        onChangeText={setNome}
        style={{
          backgroundColor: "#fff",
          padding: 14,
          borderRadius: 10,
          marginBottom: 12,
          fontSize: 16,
          elevation: 2,
        }}
      />

      <TextInput
        placeholder="Data de nascimento"
        placeholderTextColor="#888"
        onChangeText={setDataNasc}
        style={{
          backgroundColor: "#fff",
          padding: 14,
          borderRadius: 10,
          marginBottom: 12,
          fontSize: 16,
          elevation: 2,
        }}
      />

      <TextInput
        placeholder="Raça"
        placeholderTextColor="#888"
        onChangeText={setRaca}
        style={{
          backgroundColor: "#fff",
          padding: 14,
          borderRadius: 10,
          marginBottom: 12,
          fontSize: 16,
          elevation: 2,
        }}
      />

      <TextInput
        placeholder="Cor"
        placeholderTextColor="#888"
        onChangeText={setCor}
        style={{
          backgroundColor: "#fff",
          padding: 14,
          borderRadius: 10,
          marginBottom: 12,
          fontSize: 16,
          elevation: 2,
        }}
      />

      <TextInput
        placeholder="Link da imagem (opcional)"
        placeholderTextColor="#888"
        onChangeText={setImageUrl}
        style={{
          backgroundColor: "#fff",
          padding: 14,
          borderRadius: 10,
          marginBottom: 20,
          fontSize: 16,
          elevation: 2,
        }}
      />
      
      <TouchableOpacity onPress={registrarGato}>
        <View
          style={{
            backgroundColor: "#3498db",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            elevation: 3,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Cadastrar
          </Text>
        </View>
      </TouchableOpacity>

    <TouchableOpacity>
        <View
          style={{
            backgroundColor: "#3498db",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            elevation: 3,
          }}
        >
          <Link
            href={'/funcoes'}
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Voltar
          </Link>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
