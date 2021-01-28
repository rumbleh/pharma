import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
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
import {useSelector} from 'react-redux';
import {useState} from 'react';

type Props = DrawerContentComponentProps<DrawerNavigationProp>;

export function DrawerContent(props: Props) {
  const paperTheme = useTheme();
  const toggleTheme = () => {
    return null;
  };
  const theme = 'g';
  const rtl = false;

  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  });
  const config = useSelector((state) => state);
  const countLowStock = (config) => {
    config.reduce((qtde, prd) => {
      return qtde + (prd.estoque < prd.estoque_minimo ? 1 : 0);
    });
  };

  const [contarProdutos, setContarProdutos] = useState(true);
  const [contarEstoqueBaixo, setContarEstoqueBaixo] = useState(true);

  const swtContarProdutos = () => {
    setContarProdutos(!contarProdutos);
  };
  const swtEstoqueBaixo = () => {
    setContarEstoqueBaixo(!contarEstoqueBaixo);
  };

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
          <View style={styles.row}>
            {contarProdutos ? (
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {config.produtos.length}
                </Paragraph>
                <Caption style={styles.caption}>Produtos cadastrados</Caption>
              </View>
            ) : null}
            {contarEstoqueBaixo ? (
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {
                    config.produtos.filter((prd) => {
                      return prd.estoque < prd.estoque_minimo;
                    }).length
                  }
                </Paragraph>
                <Caption style={styles.caption}>Abaixo do estoque</Caption>
              </View>
            ) : null}
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="boxes" color={color} size={size} />
            )}
            label="Produtos"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="box-open" color={color} size={size} />
            )}
            label="Estoque baixo"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Configurações">
          <TouchableRipple onPress={swtContarProdutos}>
            <View style={styles.preference}>
              <Text>Mostrar quantidade de produtos</Text>
              <View pointerEvents="none">
                <Switch value={contarProdutos} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={swtEstoqueBaixo}>
            <View style={styles.preference}>
              <Text>Mostrar estoque abaixo</Text>
              <View pointerEvents="none">
                <Switch value={contarEstoqueBaixo} />
              </View>
            </View>
          </TouchableRipple>
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
