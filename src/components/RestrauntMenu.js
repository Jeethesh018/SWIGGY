import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  let [resinfo, setResinfo] = useState(null);
  let { resid1 } = useParams();

  useEffect(() => {
    async function fetchdata() {
      let res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8890014&lng=77.5984758&collection=${resid1}&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      let data = await res.json();
      console.log(
        data?.data?.cards
          .filter((item, i) => i >= 3)
          .map((item) => item.card.card.info)
      );
      setResinfo(
        data?.data?.cards
          .filter((item, i) => i >= 3)
          .map((item) => item.card.card.info)
      );
    }
    fetchdata();
  }, []);

  return resinfo === null ? (
    <Shimmer />
  ) : (
    resinfo.map((items) => (
      <div className="menu" key={items.id}>
        <h1>{items.name}</h1>
        <h2>{items.costForTwo}</h2>
        <ul>
          <li>{items.avgRatingString}</li>

          <li>{items.cuisines}</li>
          <li>{items.locality}</li>
        </ul>
      </div>
    ))
  );
};

export default RestaurantMenu;
