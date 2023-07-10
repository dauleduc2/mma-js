import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./DetailScreen";
import OrchidList from "./OrchidList";

const OrchidTab = createNativeStackNavigator();

export default function OrchidTabScreen() {
  return (
    <OrchidTab.Navigator>
      <OrchidTab.Screen name="OrchidList" component={OrchidList} />
      <OrchidTab.Screen name="Detail" component={DetailScreen} />
    </OrchidTab.Navigator>
  );
}
