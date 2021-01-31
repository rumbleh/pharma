import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-swipeable';
import axios from 'axios';

const ProdutoFlatComponet = ({data, index}) => {
  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('VisualizarProduto', {
      name: data.nome,
      id: data.id,
    });
  };
  const excluir = (id) => {
    axios
      .delete(`http://10.0.2.2:3000/produtos/${id}`)
      .then((res) => {
        Alert.alert('Sucesso', 'Produto excluído com sucesso!');
        navigation.navigate('ListaProdutos', {res});
      })
      .catch((erro) => console.log(erro));
  };
  const rightButtons = [
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('EditarProduto', {
          name: data.nome,
          id: data.id,
        });
      }}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: '#ffdd1f',
      }}>
      <Icon name="pencil" size={40} color="black" />
    </TouchableOpacity>,
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: '#8e2525',
      }}
      onPress={() => {
        Alert.alert(
          'Confirmação',
          'Confirma a exclusão deste produto?',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Sim',
              onPress: () => {
                excluir(data.id);
              },
            },
          ],
          {cancelable: false},
        );
      }}>
      <Icon color="white" size={50} name="trash" />
    </TouchableOpacity>,
  ];

  return (
    <Swipeable rightButtons={rightButtons}>
      <TouchableOpacity onPress={navegar} style={styles.container}>
        <Image
          source={{uri: data.foto}}
          resizeMode="cover"
          style={styles.thumbnail}
        />
        <View style={styles.subcontainer}>
          <Text style={styles.title}>{data.nome}</Text>
          <Text>{data.categoria}</Text>
          <Text>R$ {parseFloat(data.preco).toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  subcontainer: {
    marginLeft: 10,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerFavorito: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  estrelas: {
    flex: 1,
    alignItems: 'flex-start',
  },
  favorito: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 8,
    borderRadius: 50,
  },
});

export default ProdutoFlatComponet;
