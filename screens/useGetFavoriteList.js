import React, { useEffect, useState, useMemo } from "react";
import { getFavoriteList, isFavorite } from "../utils/store";
import data from "../data.json";

function useGetFavoriteList() {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    getFavoriteList().then((data) => {
      setFavoriteList(data);
    });
  }, []);

  const dataWithFavorite = React.useMemo(
    () =>
      data.orchids.map((orchid) => ({
        ...orchid,
        isFavorite: isFavorite(favoriteList, orchid.id),
      })),
    [data, favoriteList]
  );

  const categoryList = useMemo(() => {
    return data.categories;
  }, [data]);

  return { favoriteList, setFavoriteList, dataWithFavorite, categoryList };
}

export default useGetFavoriteList;
