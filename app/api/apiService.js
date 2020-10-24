import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {Alert, ToastAndroid} from 'react-native';

export const client = axios.create({
  baseURL: 'https://itunes.apple.com/',
});

export const getRequestData = (method, url, data, headers) => {
  const axiosRequest = {
    method,
    url,
    ...(data && {data}),
    ...(headers && {headers}),
  };
  return axiosRequest;
};

export const fetchData = async (config, skipTimeout) => {
  const netState = await NetInfo.fetch();
  if (!netState.isConnected) {
    Alert.alert('No Internet', 'Please connect to internet and try again');
    return;
  } else if (
    !netState.isInternetReachable ||
    (netState.type === 'cellular' &&
      netState.details.cellularGeneration !== '4g')
  ) {
    ToastAndroid.show('Please wait, Your Internet is slow', ToastAndroid.LONG);
  }
  return client({...config})
    .then((response) => response)
    .catch((error) => {
      let err = {};
      if (error.response) {
        err = {
          status: error.response.status,
          data: error.response.data,
        };
      } else if (error.request) {
        err = {
          status: error.request.status,
          data: {
            detail: error.request._response,
          },
        };
      } else {
        err = {
          status: 500,
          data: {
            detail: error.message,
          },
        };
      }
      return err;
    });
};
