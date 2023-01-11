import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useMenuContext } from "../../Context/MenuContext";
import { useUserContext } from "../../Context/UserContext";
import { fetchRestaurant } from "../../features/restaurantSlice";

import MenuInfoNav from "../menu/MenuInfoNav/MenuInfoNav";
import "./RestaurantSharedLayout.css";

const RestaurantSharedLayout = () => {
  const { user } = useUserContext();
  const { restaurant, setRestaurantState } = useMenuContext();
  const userData = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.restaurantId) return; //user doesn't have restaurant
    if (restaurant._id) return; //dont fetch again
    const controller = new AbortController();
    setRestaurantState(controller, user.restaurantId); //fetch both restaurant and menu
    return () => controller.abort();
  }, []);

  return (
    <div className="restaurant-container">
      <MenuInfoNav />
      <Outlet />
    </div>
  );
};

export default RestaurantSharedLayout;
