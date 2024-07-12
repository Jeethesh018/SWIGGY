import { useEffect, useState } from "react";
import Button from "../../src/components/Button";
import { swiggy } from "../utils/mockData.js";
import RestroCards from "./RestroCards";

export const Body = () => {
  const [list, setList] = useState(swiggy);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8890014&lng=77.5984758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        console.log(response);
      } catch (e) {
        console.log(e, "Data fetching Failed");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search">
        <input placeholder="search" />
        <Button
          className="topRated"
          onClick={() => setList(list.filter((item) => item.avgRating > 4.2))}
          style={{ color: "black" }}
        >
          Top Rated Restaurants
        </Button>
      </div>
      <div className="restro-container">
        {list.map((swiggy) => (
          <RestroCards key={swiggy.userid} swiggyobj={swiggy} />
        ))}
      </div>
    </div>
  );
};

export default Body;
