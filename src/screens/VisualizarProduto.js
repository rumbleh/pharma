import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const VisualizarProduto = () => {
  const lista = useSelector((state) => state.produtos);

  return (
    <View>
      <Text>Visualização de produto</Text>
    </View>
  );
};

export default VisualizarProduto;
