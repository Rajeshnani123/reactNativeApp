import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const getIcon = (type, props) => {
  switch (type) {
    case 'AntDesign':
      return <AntDesign {...props} />;
    default:
      return null;
  }
};

const Icon = props => {
  return getIcon(props.type, props);
};

export default Icon;
