import React, { useContext } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OrchidBox from "./OrchidBox";
import { MyContext } from "../App";
import Icon from "react-native-vector-icons/Feather";
import { setFavoriteList as setFavoriteListStore } from "../utils/store";

export default function FavoriteList({ navigation }) {
  const {
    dataListWithFavorite,
    setDataListWithFavorite,
    favoriteList,
    setFavoriteList,
  } = useContext(MyContext);

  const showConfirmDialog = () => {
    return Alert.alert("Are your sure?", "Are you sure to delete all orchid?", [
      {
        text: "Yes",
        onPress: () => {
          setFavoriteList?.([]);
          setFavoriteListStore([]);
          setDataListWithFavorite?.(
            (dataListWithFavorite || []).map((item) => {
              return {
                ...item,
                isFavorite: false,
              };
            })
          );
        },
      },
      {
        text: "No",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      {favoriteList.length === 0 ? (
        <Text>No favorite orchid</Text>
      ) : (
        <FlatList
          data={(dataListWithFavorite || []).filter(
            (item) => item.isFavorite === true
          )}
          renderItem={({ item }) => (
            <OrchidBox
              data={item}
              isFavorite={item.isFavorite}
              navigation={navigation}
              needConfirm
            />
          )}
          numColumns={1}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      )}
      {favoriteList.length > 0 && (
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={showConfirmDialog}
          >
            <Icon name="trash-2" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  iconContainer: {
    position: "absolute",
    flex: 1,
    bottom: 20,
    right: 20,
    backgroundColor: "#FF4500",
    width: 50,
    borderRadius: 25,
    height: 50,
  },
  deleteButton: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
