import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {COLOR, FONT} from '../common/CommonStyle';
import DasboardScreen from '../components/Dashboard/DasboardScreen';
import ItemDetailScreen from '../components/Dashboard/ItemDetailScreen';
import APP_ROUTE from './RootConstant';

const Stack = createStackNavigator();

const defaultScreenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerTintColor: COLOR.white,
  headerStyle: {
    backgroundColor: COLOR.error,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: FONT.extraLarge,
  },
};

function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName={APP_ROUTE.DASHBOARD}
      screenOptions={defaultScreenOptions}>
      <Stack.Screen name={APP_ROUTE.DASHBOARD} component={DasboardScreen} />
      <Stack.Screen
        name={APP_ROUTE.ITEM_DETAILS}
        component={ItemDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
}
