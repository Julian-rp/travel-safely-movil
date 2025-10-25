import React from 'react';
import { Button } from 'react-native-paper';

export default function CustomButton({ title, onPress, mode = "contained" }) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={{ marginVertical: 10, borderRadius: 10 }}
      contentStyle={{ paddingVertical: 5 }}
    >
      {title}
    </Button>
  );
}
