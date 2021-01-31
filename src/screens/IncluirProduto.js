import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextInput, Button} from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const IncluirProduto = () => {
  const id = useRoute().params.id;
  const initialState = {
    id: '',
    codigo: '',
    nome: '',
    categoria: '',
    preco: '',
    estoque: '',
    estoque_minimo: '',
    foto: '',
  };
  const [prd, setPrd] = useState(initialState);
  const navigation = useNavigation();
  const create = () => {
    axios
      .post(`http://10.0.2.2:3000/produtos`, prd)
      .then((res) => {
        Alert.alert('Sucesso', 'Produto incluído com sucesso!');
        navigation.navigate('ListaProdutos', {res});
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={20} style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              ImagePicker.launchImageLibrary({}, (res) =>
                setPrd({...prd, foto: res.uri}),
              )
            }>
            <Image
              source={{uri: prd.foto == '' ? null : prd.foto}}
              width={150}
              height={150}
              style={{
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'black',
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignContent: 'flex-start',
            marginTop: 20,
          }}>
          <View style={styles.linha}>
            <TextInput
              label="Produto"
              value={prd.nome}
              onChangeText={(txt) => setPrd({...prd, nome: txt})}
              style={styles.input}
            />
          </View>
          <View style={styles.linha}>
            <TextInput
              label="Categoria"
              value={prd.categoria}
              onChangeText={(txt) => setPrd({...prd, categoria: txt})}
              style={styles.input}
            />
          </View>
          <View style={styles.linha}>
            <TextInput
              label="Código"
              value={prd.codigo}
              onChangeText={(txt) => setPrd({...prd, codigo: txt})}
              style={styles.input}
            />
          </View>
          <View
            style={[
              styles.linha,
              {
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                alignContent: 'space-between',
              },
            ]}>
            <TextInput
              label="Estoque"
              value={prd.estoque.toString()}
              onChangeText={(txt) => setPrd({...prd, estoque: txt})}
              style={styles.input}
            />
            <TextInput
              label="Estoque mínimo"
              value={prd.estoque_minimo.toString()}
              onChangeText={(txt) => setPrd({...prd, estoque_minimo: txt})}
              style={styles.input}
            />
            <TextInput
              label="Preço"
              value={prd.preco.toString()}
              onChangeText={(txt) => setPrd({...prd, preco: parseFloat(txt)})}
              style={styles.input}
            />
          </View>
          <Button
            style={{margin: 15}}
            icon="check"
            mode="contained"
            onPress={() => create()}>
            Incluir produto
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  coluna: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  dado: {
    flex: 1,
    fontSize: 20,
  },
  input: {
    borderStyle: 'solid',
    flex: 1,
  },
});
export default IncluirProduto;
