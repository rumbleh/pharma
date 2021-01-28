import React from 'react';
import {View, FlatList} from 'react-native';
import ProdutoFlatComponent from '../components/ProdutoFlatComponent';
import {useSelector} from 'react-redux';

const ListaProdutos = () => {
  const lista = useSelector((state) => state.produtos);

  return (
    <View>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => (
          <ProdutoFlatComponent data={item} index={index} />
        )}
      />
    </View>
  );
};

export default ListaProdutos;
