import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListaProdutos from './ListaProdutos';
import IncluirProduto from './IncluirProduto';
import EditarProduto from './EditarProduto';
import VisualizarProduto from './VisualizarProduto';
import Header from '../components/AppHeader';
import {useNavigation} from '@react-navigation/native';

const ProdutosStack = ({navigation}) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="ListaProdutos"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="ListaProdutos"
        component={ListaProdutos}
        options={{headerTitle: 'Listagem de produtos'}}
      />
      <Stack.Screen
        name="VisualizarProduto"
        component={VisualizarProduto}
        options={{headerTitle: 'Produto '}}
      />
      <Stack.Screen
        name="IncluirProduto"
        component={IncluirProduto}
        options={{headerTitle: 'Produto '}}
      />
      <Stack.Screen
        name="EditarProduto"
        component={EditarProduto}
        options={{headerTitle: 'Produto '}}
      />
    </Stack.Navigator>
  );
};

export default ProdutosStack;
