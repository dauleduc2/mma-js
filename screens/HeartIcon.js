import React, { useContext } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { addFavorite, removeFavorite } from "../utils/store";
import { MyContext } from "../App";
import { AntDesign } from "@expo/vector-icons";

const HeartIcon = ({
  isFavorite,
  id,
  wrapperStyles,
  size = 40,
  needConfirm = false,
}) => {
  const { setDataListWithFavorite, setFavoriteList } = useContext(MyContext);
  const onToggleFavorite = () => {
    if (isFavorite) {
      setFavoriteList?.((prev) => {
        return prev.filter((item) => item !== id);
      });
      setDataListWithFavorite?.((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isFavorite: false,
            };
          }
          return item;
        });
      });
      return removeFavorite(id);
    }

    setFavoriteList?.((prev) => {
      return [...prev, id];
    });
    setDataListWithFavorite?.((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: true,
          };
        }
        return item;
      });
    });
    return addFavorite(id);
  };

  const onConfirm = () => {
    if (isFavorite) {
      return Alert.alert(
        "Are your sure?",
        "Are you sure to unfavorite this orchid?",
        [
          {
            text: "Yes",
            onPress: () => {
              onToggleFavorite();
            },
          },
          {
            text: "No",
          },
        ]
      );
    }

    return onToggleFavorite();
  };

  return (
    <TouchableOpacity
      style={wrapperStyles}
      onPress={needConfirm ? onConfirm : onToggleFavorite}
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        style={{ fontSize: size }}
        color={isFavorite ? "#e91e63" : "grey"}
      />
    </TouchableOpacity>
  );
};

export default HeartIcon;
