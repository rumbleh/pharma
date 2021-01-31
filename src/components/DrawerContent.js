import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Switch,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {useState} from 'react';

type Props = DrawerContentComponentProps<DrawerNavigationProp>;

export function DrawerContent(props: Props) {
  const paperTheme = useTheme();

  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  });
  const config = []; //useSelector((state) => state);

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
        //@ts-ignore
        style={[
          styles.drawerContent,
          {
            backgroundColor: paperTheme.colors.surface,
            transform: [{translateX}],
          },
        ]}>
        <View style={styles.userInfoSection}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}>
            <Avatar.Image
              source={{
                uri:
                  'https://media-exp1.licdn.com/dms/image/C5603AQGN4goisJ7a_w/profile-displayphoto-shrink_200_200/0/1607611048171?e=1617235200&v=beta&t=LV_IkcZAeo1bxa8xUdliwTuCi1BFjDffmC4F7F_7xzY',
              }}
              size={50}
            />
          </TouchableOpacity>
          <Title style={styles.title}>Pharma</Title>
          <Caption style={styles.caption}>Thiago de Queiroz</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="boxes" color={color} size={size} />
            )}
            label="Produtos"
            onPress={() => {
              props.navigation.navigate('ListaProdutos', {});
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="plus" color={color} size={size} />
            )}
            label="Incluir produto"
            onPress={() => {
              props.navigation.navigate('IncluirProduto', {});
            }}
          />
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
