import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN = 'TOKEN';
const ROLE_TYPE = 'TYPE';


export const setAccessToken = async function (value) {
  AsyncStorage.setItem(ACCESS_TOKEN, value);
};

export const setRoleType = async function (value) {
  AsyncStorage.setItem(ROLE_TYPE, value);
};

export const getAccessToken = async function () {
  let accessToken = '';
  let token = await AsyncStorage.getItem(ACCESS_TOKEN);
  if (token !== null) accessToken = token;
  return accessToken;
};

export const getRoleType = async function () {
  let roleType = '';
  let type = await AsyncStorage.getItem(ROLE_TYPE);
  if (type !== null) roleType = type;
  return roleType;
};

export const clearAccessToken = async function () {
  await AsyncStorage.removeItem(ACCESS_TOKEN);
};

export const clearRoleType = async function () {
  await AsyncStorage.removeItem(ROLE_TYPE);
};

export const clearAsync = async function () {
  AsyncStorage.clear();
};
