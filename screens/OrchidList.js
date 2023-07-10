import { View, FlatList, StyleSheet, Text } from "react-native";
import OrchidBox from "./OrchidBox";
import { MyContext } from "../App";
import { useContext, useCallback, useMemo } from "react";

export default function OrchidList({ navigation }) {
  const {
    dataListWithFavorite,
    categoryList,
    currentFilterCategory,
    setCurrentFilterCategory,
  } = useContext(MyContext);

  const handleFilterChange = useCallback((cate) => {
    setCurrentFilterCategory?.(cate);
  }, []);

  const showData = useMemo(() => {
    if (currentFilterCategory === "All") return dataListWithFavorite;

    return dataListWithFavorite.filter(
      (item) => item.type === currentFilterCategory
    );
  }, [dataListWithFavorite, currentFilterCategory]);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 30,
        }}
      >
        <Text>Category:</Text>

        <View
          style={{
            marginTop: 20,
            display: "flex",
            gap: 5,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {[...categoryList].map((item) => (
            <Text
              key={item}
              style={{
                fontSize: 16,
                backgroundColor:
                  currentFilterCategory === item ? "#0000FF" : "#7EC8E3",
                color: "white",
                padding: 10,
                alignSelf: "flex-start",
                borderRadius: 10,
                overflow: "hidden",
              }}
              onPress={() => handleFilterChange(item)}
            >
              {item}
            </Text>
          ))}
        </View>
      </View>
      <FlatList
        data={showData}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
});
