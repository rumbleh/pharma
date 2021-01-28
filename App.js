import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';
import ProdutoReducer from './src/reducers/ProdutoReducer';
import {DrawerContent} from './src/components/DrawerContent';
import ProdutosStack from './src/screens/StackProdutos';
import {createStore} from 'redux';

const store = createStore(ProdutoReducer);
const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="ProdutosStack" component={ProdutosStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
