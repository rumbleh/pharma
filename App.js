import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';
import {DrawerContent} from './src/components/DrawerContent';
import ProdutosStack from './src/screens/StackProdutos';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="ProdutosStack" component={ProdutosStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
