import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import ProdutoFlatComponent from '../components/ProdutoFlatComponent';
import axios from 'axios';
import {Portal, FAB} from 'react-native-paper';
import {useIsFocused, useRoute} from '@react-navigation/native';

const ListaProdutos = ({navigation}) => {
  const [produtos, setProdutos] = useState([]);
  const route = useRoute();
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/produtos').then(({data}) => {
      setProdutos(data);
    });
  }, [route.params?.res]);

  return (
    <View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => (
          <ProdutoFlatComponent data={item} index={index} />
        )}
      />
      <Portal>
        <FAB
          visible={useIsFocused()}
          onPress={() => {
            navigation.navigate('IncluirProduto', {});
          }}
          icon="plus"
          style={{
            position: 'absolute',
            bottom: 15,
            right: 16,
          }}
        />
      </Portal>
    </View>
  );
};

export default ListaProdutos;
