import React, {useState, useEffect} from 'react';
import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('screen');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const BASE_SCALE = width / guidelineBaseWidth;

export function isIos() {
  return Platform.OS === 'ios' ? true : false;
}

export function normalize(size) {
  const newSize = size * BASE_SCALE;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function font(n) {
  return isIos() ? normalize(n) : normalize(n + 2);
}

export function fontEvents(n) {
  return isIos() ? normalize(n) : normalize(n + 1);
}
