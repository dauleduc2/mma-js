import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./DetailScreen";
import FavoriteList from "./FavoriteList";

const FavoriteTab = createNativeStackNavigator();

export default function FavoriteTabScreen() {
  return (
    <FavoriteTab.Navigator>
      <FavoriteTab.Screen name="FavoriteList" component={FavoriteList} />
      <FavoriteTab.Screen name="Detail" component={DetailScreen} />
    </FavoriteTab.Navigator>
  );
}
