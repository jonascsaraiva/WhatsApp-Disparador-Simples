import React from 'react';
import { View, TextInput, Image } from 'react-native';

const ChildComponent = ({ number, message, onNumberChange, onMessageChange }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' , gap: 10}}>
      <Image 
        style={{ width: 150, height: 150 }}
        source={require("../assets/Logo.png")}
      />
      <TextInput
        style={{ width: 222,height: 40, borderColor: 'orange', backgroundColor: '#FFFFFF', borderWidth: 2, borderRadius: 10}}
        placeholder="Número (Ex: 5588999991234)"
        onChangeText={onNumberChange}
        value={number}
      />
      <TextInput
        style={{ width: 222,height: 40, borderColor: 'orange', backgroundColor: '#FFFFFF' , borderWidth: 2, borderRadius: 10 }}
        placeholder="Mensagem"
        onChangeText={onMessageChange}
        value={message}
      />
    </View>
  );
};

export default ChildComponent;
