import { View, Text, StyleSheet, Image } from "react-native";
import React, { useContext, useMemo } from "react";
import HeartIcon from "./HeartIcon";
import { MyContext } from "../App";

const DetailScreen = ({ route }) => {
  const { dataListWithFavorite } = useContext(MyContext);
  const {
    orchid: { id },
  } = route.params;

  const orchid = useMemo(() => {
    if (!dataListWithFavorite) return;

    return dataListWithFavorite.find((item) => item.id === id);
  }, [dataListWithFavorite]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: orchid?.path }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{orchid?.name}</Text>
        <Text style={styles.price}>Price: {orchid?.price}</Text>
        <Text style={styles.type}>Type: {orchid?.type}</Text>
        <HeartIcon
          wrapperStyles={styles.icon}
          size={100}
          id={id}
          isFavorite={orchid?.isFavorite}
          needConfirm
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 350,
    height: 350,
    borderRadius: 8,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    marginBottom: 4,
  },
  type: {
    fontSize: 20,
  },
  icon: {
    marginTop: 16,
    alignItems: "center",
  },
});

export default DetailScreen;
