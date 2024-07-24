import Button from "../../src/components/Button";
import RestroCards from "./RestroCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBodyAPI from "../utils/useBodyAPI";

export const Body = () => {
  const [list, list2, loading, label, search, setList2, setLabel, setSearch] =
    useBodyAPI();
  return (
    <div className="p-5">
      <div className="flex justify-end ">
        <input
          className="h-10 w-60 rounded-md pl-10 ml-10 border-solid  border-stone-400 border-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search food..."
        />
        <Button
          className="bg-stone-300 h-10 w-40 ml-2  rounded-lg"
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
        <div className="p-10 m-10 flex flex-wrap">
          {search !== ""
            ? list2
                .filter((item) =>
                  item.action.text.toLowerCase().includes(search.toLowerCase())
                )
                .map((swiggy) => (
                  <Link
                    key={swiggy.id}
                    to={
                      `/restaurant/` +
                      swiggy.action.link
                        .split("/")[4]
                        .replace(/[\[\]"]/g, "")
                        .substring(0, 5)
                    }
                  >
                    <RestroCards key={swiggy.id} swiggyobj={swiggy} />
                  </Link>
                ))
            : list2
                .filter((item) => item.action.text != "Monsoon")
                .map((swiggy) => (
                  <Link
                    key={swiggy.id}
                    to={
                      `/restaurant/` +
                      swiggy.action.link
                        .split("/")[4]
                        .replace(/[\[\]"]/g, "")
                        .substring(0, 5)
                    }
                  >
                    <RestroCards swiggyobj={swiggy} />
                  </Link>
                ))}
        </div>
      )}
    </div>
  );
};

export default Body;
