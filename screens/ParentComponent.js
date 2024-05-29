import React, { useState } from 'react';
import { View, Alert, } from 'react-native';
import ChildComponent from '../screens/ChildComponent';
import Button from '../components/Button';
import { Linking } from 'react-native';

const ParentComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (phoneNumber.startsWith('55') && phoneNumber.length >= 11) {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      Linking.openURL(whatsappUrl);
    } else {
      Alert.alert('Erro', 'Número de telefone inválido');
    }
  };

  return (
    <View>
      <ChildComponent
        number={phoneNumber}
        message={message}
        onNumberChange={setPhoneNumber}
        onMessageChange={setMessage}
      />
      <Button title="Enviar mensagem" onPress={handleSendMessage} />
    </View>
  );
};

export default ParentComponent;
