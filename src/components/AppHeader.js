import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/FontAwesome5';

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction onPress={navigation.pop} />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://media-exp1.licdn.com/dms/image/C5603AQGN4goisJ7a_w/profile-displayphoto-shrink_200_200/0/1607611048171?e=1617235200&v=beta&t=LV_IkcZAeo1bxa8xUdliwTuCi1BFjDffmC4F7F_7xzY',
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;
