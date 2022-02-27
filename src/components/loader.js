import PropType from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
// import {BlurView} from '@react-native-community/blur';
import {normalize, dimension, isIos} from '../utils/Platform';

const {width, height} = dimension();

export default function Loader({
  error,
  errorMsg,
  backgroundColor,
  singleIndicator,
  color,
}) {
  //   const [blurView, setBlurView] = useState(null);
  const [loading, setLoading] = useState(true);

  const bgBlurRef = useRef(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (singleIndicator && singleIndicator) {
    return <ActivityIndicator size="large" color={'red'} />;
  } else {
    return (
      <View style={styles.container}>
        <Spinner
          visible={loading}
          size="large"
          color={'red'}
          overlayColor={'rgba(130,130,130,0.5)'}
        />
      </View>
    );
  }

  return (
    <View>
      {/* <BlurView
        viewRef={blurView}
        style={styles.blurViewStyle}
        blurRadius={isIos() ? 2 : 1}
        blurType="large"
        blurAmount={isIos() ? 2 : 4}
      /> */}
      <ActivityIndicator size="large" color={'red'} />
    </View>
  );
}

Loader.propTypes = {
  error: PropType.bool,
  errorMsg: PropType.string,
};

Loader.defaultProp = {
  error: false,
  errorMsg: '',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    fontSize: 12,
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0,05)',
  },
});
