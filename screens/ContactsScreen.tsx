import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import API, { graphqlOperation } from '@aws-amplify/api';
import { listUsers } from '../src/graphql/queries';

import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import ContactListItem from '../components/ContactListItem';

export default function Contacts() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(graphqlOperation(
          listUsers
        ));
        setUsers(usersData.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUsers();
  }, [])

  return (
    <View style={{width: '100%', height: '100%'}}>
      <FlatList
        data={users}
        renderItem={({ item }) => 
          <ContactListItem user={item} />
        }
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
