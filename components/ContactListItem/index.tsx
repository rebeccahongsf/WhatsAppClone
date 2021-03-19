import moment from 'moment';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ChatRoom } from '../../types';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export type ContactListItemProps = {
  user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = () => {
    // navigate to this chatroom with this user
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container} >
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{ user.name }</Text>
            <Text style={styles.status}>{ user.status }</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default ContactListItem;