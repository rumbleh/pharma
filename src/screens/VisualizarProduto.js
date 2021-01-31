import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const VisualizarProduto = () => {
  const id = useRoute().params.id;

  const [prd, setPrd] = useState([]);

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:3000/produtos/${id}`)
      .then(({data}) => {
        setPrd(data);
      })
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Image
          source={{uri: prd.foto}}
          width={150}
          height={150}
          style={{borderRadius: 100, borderColor: 'black'}}></Image>
      </View>
      <View
        style={{
          flex: 1,
          alignContent: 'flex-start',
        }}>
        <View style={[styles.linha, {paddingTop: 20}]}>
          <Text style={styles.coluna}>Produto</Text>
          <Text style={styles.dado}>{prd.nome}</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.coluna}>Código</Text>
          <Text style={styles.dado}>{prd.codigo}</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.coluna}>Categoria</Text>
          <Text style={styles.dado}>{prd.categoria}</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.coluna}>Estoque</Text>
          <Text style={styles.dado}>{prd.estoque}</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.coluna}>Estoque mínimo</Text>
          <Text style={styles.dado}>{prd.estoque_minimo}</Text>
        </View>
        <View style={styles.linha}>
          <Text style={styles.coluna}>Preço</Text>
          <Text style={styles.dado}>R$ {parseFloat(prd.preco).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    padding: 5,
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
});
export default VisualizarProduto;
