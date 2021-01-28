import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const EditarProduto = () => {
  const lista = useSelector((state) => state.produtos);

  return (
    <View>
      <Text>Editando produto</Text>
    </View>
  );
};

export default EditarProduto;
