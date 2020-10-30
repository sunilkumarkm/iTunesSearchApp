import * as React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {getRequestData} from '../../api/apiService';
import {API_URL} from '../../api/apiUrl';
import {Loader} from '../../common';
import APP_ROUTE from '../../navigation/RootConstant';
import {fetchItemList} from './dashboardActions';
import {styles} from './DashboardStyle';

class DashboardScreen extends React.PureComponent {
  componentDidMount() {
    this.getItemList();
  }

  getItemList = () => {
    const request = getRequestData('get', API_URL.SEARCH_ITEMS);
    this.props.fetchItemList(request);
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemWrapper}
      onPress={() =>
        this.props.navigation.navigate(APP_ROUTE.ITEM_DETAILS, {item})
      }>
      <Image
        source={{uri: item.artworkUrl60}}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.trackName}
      </Text>
      <Text style={styles.infoTxt} numberOfLines={1} ellipsizeMode="tail">
        {item.artistName}
      </Text>
    </TouchableOpacity>
  );

  render() {
    const {loading, itemList} = this.props;

    return (
      <View style={styles.container}>
        {!loading ? (
          <FlatList
            data={itemList}
            renderItem={this.renderItem}
            numColumns={3}
            keyExtractor={(item) => item.trackId.toString()}
          />
        ) : (
          <Loader />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.dashboard.loading,
    itemList: state.dashboard.itemList,
  };
};

const mapDispatchToProps = {fetchItemList};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
