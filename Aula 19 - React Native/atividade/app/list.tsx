import { collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { db } from "../firebaseConfig";

export default function GatoList() {

  const [gatos, setGatos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGatos() {
    try {
      const q = query(collection(db, "gatos"));
      const snapshot = await getDocs(q);

      console.log(snapshot.docs)

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setGatos(list);

    } catch (err) {
      console.log("Erro ao buscar gatos:", err);
    } finally {
      setLoading(false);
    }
  }

  async function updateGato(id: string, data: any) {
    try {
      const ref = doc(db, "gatos", id);
      await updateDoc(ref, data);

      alert("Gato atualizado!");
      fetchGatos();

    } catch (err) {
      console.log("Erro ao atualizar:", err);
    }
  }

  async function deleteGato(id: string) {
    try {
      const ref = doc(db, "gatos", id);
      await deleteDoc(ref);

      alert("Gatinho deletado!");
      fetchGatos();

    } catch (err) {
      console.log("Erro ao deletar:", err);
    }
  }

  useEffect(() => {
    fetchGatos();
  }, []);

  if (loading) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (gatos.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Nenhum gatinho encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        Gatinhos
      </Text>

      <FlatList
        data={gatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 12,
              marginBottom: 15,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {item.nome}
            </Text>
            <Text style={{ opacity: 0.7 }}>Data de nascimento: {item.dataNasc}</Text>
            <Text style={{ opacity: 0.7 }}>Raça: {item.raca}</Text>
            <Text style={{ opacity: 0.7 }}>Cor: {item.cor}</Text>

            <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#3498db",
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  borderRadius: 8,
                }}
                onPress={() =>
                  updateGato(item.id, { brand: "Atualizado" })
                }
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#e74c3c",
                  paddingVertical: 8,
                  paddingHorizontal: 14,
                  borderRadius: 8,
                }}
                onPress={() => deleteGato(item.id)}
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
