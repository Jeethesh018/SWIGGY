import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRestuarantMenu = () => {
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

  return [resinfo, resid1];
};

export default useRestuarantMenu;
