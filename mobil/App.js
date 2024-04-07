import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStudents } from './services/tanulokService';
import { FlatList } from 'react-native';

export default function App() {
  const [students, setStudent] = useState([]);
  useEffect(() => {
    getStudents().then(data => {
      console.log(data)
      setStudent(data)
    })
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Tanulók</Text>
      <FlatList 
        data={students}
        renderItem={({item}) => (
        <View style={styles.tanuloLista}>
          <Text>{item.name}</Text>
          <Text>Csoport:  {item.groupId}</Text>
          <View style={styles.footer}>
          <Text>{item.city} - </Text>
          <Text>{item.birth}</Text>
          
          </View>
        </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tanuloLista: {
    border: 'solid 2px red',
    borderRadius: 8,
    padding: 5,
    margin: 5,
    backgroundColor: 'gold',
  },
  meretText: {
    fontSize: 10,
    marginEnd: 5,
  },
  teruletText: {
    fontSize: 10,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
