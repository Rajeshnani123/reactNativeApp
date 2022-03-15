import {View, Text, ScrollView, Button, Center} from 'native-base';
import Modal from 'react-native-modal';
import React from 'react';
import {Btn, TextInput, FormSelect} from './../../components';
import {WP, FONTS, COLORS, ICON, ICONS} from './../../constants';
import styles from './styles';
import {TouchableOpacity} from 'react-native';

export const CustomModal = ({isOpen = false, renderData}) => {
  return (
    <View>
      <Modal isVisible={isOpen} coverScreen avoidKeyboard={true} propagateSwipe>
        {renderData}
      </Modal>
    </View>
  );
};
