import {TouchableOpacity} from 'react-native';
import {Text, View} from 'native-base';
import React from 'react';
import styles from './styles';
import {FONTS} from '../../constants';

export const Button = ({
  buttonStyle,
  value,
  colors,
  isLoading,
  icon,
  ...rest
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={(styles.button, {...buttonStyle})} {...rest}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffff" />
        ) : (
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                paddingHorizontal: '5%',
                color: 'white',
                ...FONTS.h3,
              }}>
              {value}
            </Text>
            {icon}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
