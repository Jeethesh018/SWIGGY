import { useState, useEffect } from "react";

function useBodyAPI() {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let response = await fetch(
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
          data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        );
        setLoading(false);
      } catch (e) {
        console.log(e, "Data fetching Failed");
      }
    }
    fetchData();
  }, []);
  console.log(search);
  return [list, list2, loading, label, search, setList2, setLabel, setSearch];
}

export default useBodyAPI;
