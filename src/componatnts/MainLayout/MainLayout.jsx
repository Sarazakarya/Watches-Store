import React, { useEffect, useState } from "react";
import NavBar from "../NavBer/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Scroll from "../Scroll/Scroll";
import { useRecoilState } from "recoil";
import { $user } from "../Store/Login";
import axios from "axios";
import UpdateCardData from "./../Use/UpdateCardData";
import { $cartAtom } from "../Store/cartAtom";
import { $watchListAtom } from "../Store/WatchListAtom";
import Loader from "../Loader/Loader";

export default function MainLayout() {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [watchList, setWatchList] = useRecoilState($watchListAtom);
  const [Loading, setIsLoading] = useState(true);
  const [user] = useRecoilState($user);

  useEffect(() => {
    if (!user.isAuth) return;

    axios(`http://localhost:3000/users/${user.user.id}`).then((data) => {
      setCartData(data.data.cart);
      setIsLoading(false);
      setWatchList(data.data.watchList);
    });
  }, [user.user?.id]);

  useEffect(() => {
    if (!user.isAuth || Loading) return;
    localStorage.setItem("cart", JSON.stringify(cartData));
    localStorage.setItem("watchlist", JSON.stringify(watchList));
    UpdateCardData(cartData, user.user.id, watchList);
  }, [cartData, watchList]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <Scroll />
    </div>
  );
}
