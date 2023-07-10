import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import HeartIcon from "./HeartIcon";

const OrchidBox = ({ data, isFavorite = false, navigation, needConfirm }) => {
  const { id, name, price, type, path } = data;
  const onClick = useCallback(() => {
    navigation.navigate("Detail", {
      orchid: data,
      isFavorite,
    });
  }, [isFavorite, data]);
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <Image
          source={{
            uri: path,
          }}
          style={styles.avatar}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>Price: {price}</Text>
          <Text style={styles.type}>
            Type: {type.charAt(0).toUpperCase() + type.substring(1)}
          </Text>
        </View>
        <HeartIcon
          wrapperStyles={styles.icon}
          id={id}
          isFavorite={isFavorite}
          needConfirm={needConfirm}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
    paddingRight: 40,
    position: "relative",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer: {
    maxWidth: "65%",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    marginBottom: 4,
  },
  type: {
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    right: 16,
  },
});

export default OrchidBox;
