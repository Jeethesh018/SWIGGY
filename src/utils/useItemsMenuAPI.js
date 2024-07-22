import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItemsMenuAPI = () => {
  let [items, setItems] = useState([]);

  let { itemsid } = useParams();

  useEffect(() => {
    async function fetchdata() {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8890014&lng=77.5984758&restaurantId=${itemsid}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`
      );
      const res = await data.json();

      setItems(res?.data?.cards);
    }
    fetchdata();
  }, []);

  return [items];
};

export default useItemsMenuAPI;
