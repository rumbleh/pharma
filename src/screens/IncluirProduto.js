import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const IncluirProduto = () => {
  const lista = useSelector((state) => state.produtos);

  return (
    <View>
      <Text>Inclusao de produto</Text>
    </View>
  );
};

export default IncluirProduto;
