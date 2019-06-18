import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
} from "react-navigation";
import DrawerScreen from "./src/screens/DrawerScreen";
import Header from "./src/components/Header";
import RestaurantList from "./src/screens/RestaurantList";
import DetailsScreen from "./src/screens/DetailsScreen";
import colors from "./src/utils/colors";
import ScreenOne from "./src/screens/ScreenOne";
import ScreenTwo from "./src/screens/ScreenTwo";

const mainStack = createStackNavigator({
  RestaurantList: { screen: RestaurantList },
  ScreenOne:{screen:ScreenOne},
  ScreenTwo:{screen:ScreenTwo}
  
});
RootStack = createDrawerNavigator(
  {
    Main: {
      screen: mainStack
    }
  },
  {
    drawerWidth: 260,
    drawerPosition: "left",
    contentComponent: DrawerScreen,
    drawerBackgroundColor: "white",
    navigationOptions: ({ navigation }) => {
      return {
        header: <Header />
      };
    }
  }
);
const AppStack = createStackNavigator({
  RootStack: { screen: RootStack },
  DetailsScreen: { screen: DetailsScreen },
  
});
const AppContainer = createAppContainer(AppStack);
export default class App extends Component {
  
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.statusbarColor} />
          <AppContainer />
      </View>
    );
  }
}
