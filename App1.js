import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';



const CadastroTecnico = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [dadosCadastrados, setDadosCadastrados] = useState([]);

  const cadastrarTecnico = () => {
    const novoCadastro = {
      Nome: nome,
      Idade: idade,
      Nacionalidade: nacionalidade,
      Experiencia: experiencia,
    };
    setDadosCadastrados([...dadosCadastrados, novoCadastro]);
    setNome('');
    setIdade('');
    setNacionalidade('');
    setExperiencia('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Técnico</Text>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome do técnico:</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome"
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Idade do técnico:</Text>
          <TextInput
            value={idade}
            onChangeText={setIdade}
            placeholder="Digite a idade"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nacionalidade do técnico:</Text>
          <TextInput
            value={nacionalidade}
            onChangeText={setNacionalidade}
            placeholder="Digite a nacionalidade"
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Experiência do técnico (em anos):</Text>
          <TextInput
            value={experiencia}
            onChangeText={setExperiencia}
            placeholder="Digite a experiência"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <Button title="Cadastrar" onPress={cadastrarTecnico} />
      </View>

      {dadosCadastrados.length > 0 && (
        <View style={styles.dadosCadastrados}>
          <Text style={styles.header}>Dados Cadastrados:</Text>
          <FlatList
            data={dadosCadastrados}
            renderItem={({ item }) => (
              <View style={styles.item}>
                {Object.keys(item).map((key) => (
                  <Text key={key} style={styles.itemText}>{`${key}: ${item[key]}`}</Text>
                ))}
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
      <Button
        title="Va para jogadores"
        onPress={() => navigation.navigate('Jogadores', { dados: dadosCadastrados })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    fontSize: 16,
  },
  dadosCadastrados: {
    marginTop: 20,
  },
  item: {
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default CadastroTecnico;