import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10 , marginTop:10}}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
