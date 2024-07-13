import { useEffect, useState } from "react";
import Button from "../../src/components/Button";
import { swiggy } from "../utils/mockData.js";
import RestroCards from "./RestroCards";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8890014&lng=77.5984758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        data = await response.json();
        setList(
          data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        );
        setList2(
          data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        );
        console.log(
          data.data.cards[0].card.card.gridElements.infoWithStyle.info
        );
        setLoading(false);
      } catch (e) {
        console.log(e, "Data fetching Failed");
      }
    }
    fetchData();
  }, []);
  console.log(search);

  return (
    <div className="body">
      <div className="search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
        <Button
          className="topRated"
          onClick={() => {
            if (label) {
              setList2(list);
            } else {
              setList2(list.filter((item) => item.id > 750000));
            }

            setLabel(!label);
          }}
          style={{ color: "black" }}
        >
          {label ? "Back" : "Top Rated"}
        </Button>
      </div>
      {loading ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <div className="restro-container">
          {search !== ""
            ? list2
                .filter((item) =>
                  item.action.text.toLowerCase().includes(search.toLowerCase())
                )
                .map((swiggy) => (
                  <RestroCards key={swiggy.id} swiggyobj={swiggy} />
                ))
            : list2.map((swiggy) => (
                <RestroCards key={swiggy.id} swiggyobj={swiggy} />
              ))}
        </div>
      )}
    </div>
  );
};

export default Body;
