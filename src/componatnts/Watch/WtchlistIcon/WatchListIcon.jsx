import React, { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { $watchListAtom } from "../../Store/WatchListAtom";

export default function WatchListIcon({ product }) {
  const [watchList, setWatchList] = useRecoilState($watchListAtom);
  const [isInWatchList, setIsInWatchList] = useState(false);

  useEffect(() => {
    if (watchList) {
      setIsInWatchList(watchList.some((item) => item.id === product.id));
    }
  }, [watchList, product]);

  function handleToggleWatchList() {
    const updatedWatchList = isInWatchList
      ? watchList.filter((item) => item.id !== product.id)
      : [...watchList, product];

    setWatchList(updatedWatchList);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
  }

  return (
    <div>
      <FontAwesomeIcon
        icon={faHeart}
        className={isInWatchList ? "Watchlist-ract" : "Watchlist-Icon"}
        onClick={handleToggleWatchList}
      />
    </div>
  );
}
