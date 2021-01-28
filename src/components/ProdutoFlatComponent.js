import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

const ProdutoFlatComponet = ({data, index}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('VisualizarProduto', {
      name: data.Title,
      index,
    });
  };

  return (
    <TouchableOpacity onPress={navegar} style={styles.container}>
      <Image
        source={{uri: data.Poster}}
        resizeMode="contain"
        style={styles.thumbnail}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.nome}</Text>
        <Text>{data.categoria}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 1,
    flexDirection: 'row',
    paddingVertical: 5,
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
