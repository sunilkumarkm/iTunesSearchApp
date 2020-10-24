import {Dimensions, StyleSheet} from 'react-native';
import {COLOR, FONT} from '../../common/CommonStyle';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.border_color,
  },
  itemWrapper: {
    display: 'flex',
    width: screenWidth / 3.25,
    marginLeft: 8,
    marginVertical: 10,
    backgroundColor: COLOR.white_shade,
    borderRadius: 4,
  },
  title: {
    fontSize: FONT.normal,
    fontWeight: 'bold',
    color: COLOR.black_shade,
    paddingLeft: 5,
  },
  infoTxt: {
    fontSize: FONT.small,
    color: COLOR.black_shade,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  image: {
    width: '100%',
    height: 120,
  },
  body: {display: 'flex', marginTop: 10},
});
