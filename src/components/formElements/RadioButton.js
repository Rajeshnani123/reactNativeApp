import React, {useState} from 'react';
import {CheckBox, View} from '@react-native-community/checkbox';

const Check = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <CheckBox value={isSelected} onValueChange={setSelection} />
    </View>
  );
};
export default Check;