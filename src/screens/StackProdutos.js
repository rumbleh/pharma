import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListaProdutos from './ListaProdutos';
import IncluirProduto from './IncluirProduto';
import EditarProduto from './EditarProduto';
import VisualizarProduto from './VisualizarProduto';
import Header from '../components/AppHeader';
import {useNavigation} from '@react-navigation/native';

const ProdutosStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="ListaProdutos"
      headerMode="screen"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}>
      <Stack.Screen
        name="ListaProdutos"
        component={ListaProdutos}
        options={{headerTitle: 'Listagem de produtos'}}
      />
      <Stack.Screen
        name="VisualizarProduto"
        component={VisualizarProduto}
        options={{headerTitle: 'Visualizando produto'}}
      />
      <Stack.Screen
        name="IncluirProduto"
        component={IncluirProduto}
        options={{headerTitle: 'Incluir produto'}}
      />
      <Stack.Screen
        name="EditarProduto"
        component={EditarProduto}
        options={{headerTitle: 'Editar produto'}}
      />
    </Stack.Navigator>
  );
};

export default ProdutosStack;
