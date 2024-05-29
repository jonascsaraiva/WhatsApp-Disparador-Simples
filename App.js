import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParentComponent from './screens/ParentComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ParentComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37020495',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
