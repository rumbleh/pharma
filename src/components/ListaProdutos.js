import React from 'react';
import {View, FlatList} from 'react-native';
import ProdutoFlatComponent from './ProdutoFlatComponent';
import {useSelector} from 'react-redux';

const ListaProdutos = () => {
  const lista = useSelector((state) => state.produtos);

  return (
    <View>
      <FlatList
        data={lista}
        renderItem={({item, index}) => (
          <ProdutoFlatComponent data={item} index={index} />
        )}
      />
    </View>
  );
};

export default ListaProdutos;
