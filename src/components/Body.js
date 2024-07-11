import { useState } from "react";
import Button from "../../src/components/Button";
import { swiggy } from "../utils/mockData.js";
import RestroCards from "./RestroCards";

export const Body = () => {
  const [list, setList] = useState(swiggy);
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
