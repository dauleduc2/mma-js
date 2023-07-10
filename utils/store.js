import AsyncStorage from "@react-native-async-storage/async-storage";

export const FAVORITE_LIST = "FAVORITE_LIST";

export const getFavoriteList = async () => {
  try {
    const favoriteList = await AsyncStorage.getItem(FAVORITE_LIST);
    return favoriteList ? JSON.parse(favoriteList) : [];
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const setFavoriteList = async (favoriteList) => {
  try {
    await AsyncStorage.setItem(FAVORITE_LIST, JSON.stringify(favoriteList));
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite = async (favorite) => {
  try {
    const favoriteList = await getFavoriteList();
    const newFavoriteList = [...favoriteList, favorite];
    await setFavoriteList(newFavoriteList);
  } catch (error) {
    console.log(error);
  }
};

export const removeFavorite = async (favorite) => {
  try {
    const favoriteList = await getFavoriteList();
    const newFavoriteList = favoriteList.filter((item) => item !== favorite);
    await setFavoriteList(newFavoriteList);
  } catch (error) {
    console.log(error);
  }
};

export const isFavorite = (favoriteList, favorite) => {
  if (favoriteList.length > 0) {
    return favoriteList.includes(favorite);
  }

  return false;
};
