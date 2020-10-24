import * as React from 'react';
import {View, Image, Linking} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {format} from 'date-fns';
import {TextData} from '../../common';
import {styles} from './DashboardStyle';

const ItemDetailScreen = ({route, navigation}) => {
  const {item} = route.params;
  console.log('item', item);
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>{item.trackName.toUpperCase()}</Card.Title>
        <Image
          source={{
            uri: item.artworkUrl60,
            cache: 'only-if-cached',
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.body}>
          <TextData info={'Track'} value={item.trackName} />
          <TextData info={'Genre'} value={item.primaryGenreName} />
          <TextData info={'Artist'} value={item.artistName} />
          <TextData
            info={'Release Date'}
            value={format(new Date(item.releaseDate), 'dd-MM-yyyy HH:mm')}
          />
          <TextData
            info={'Track Price'}
            value={item.trackPrice + ' ' + item.currency}
          />
          <Button
            title="Preview"
            type="outline"
            raised
            containerStyle={{marginTop: 10}}
            onPress={() => Linking.openURL(item.previewUrl)}
          />
        </View>
      </Card>
    </View>
  );
};
export default ItemDetailScreen;
