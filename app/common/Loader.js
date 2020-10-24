import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLOR} from './CommonStyle';

export default function Loader() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLOR.success} />
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
