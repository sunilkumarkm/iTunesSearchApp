import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR, FONT} from './CommonStyle';

export default function TextData({info, value, reverse}) {
  return (
    <View style={styles.container}>
      <Text style={styles.key}>{`${info} -`}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: 2,
  },
  key: {
    fontSize: FONT.normal,
    color: COLOR.gray,
    paddingHorizontal: 4,
  },
  value: {
    fontSize: FONT.normal,
    color: COLOR.black_shade,
    fontWeight: 'bold',
  },
});
