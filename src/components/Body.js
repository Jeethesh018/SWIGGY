import Button from "../../src/components/Button";
import { swiggy } from "../utils/mockData.js";
import RestroCards from "./RestroCards";

export const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input placeholder="search" />
        <Button style={{ color: "black" }}>search</Button>
      </div>
      <div className="restro-container">
        {swiggy
          .filter((item) => item.cuisines.find((item) => item === "Pizzas"))
          .map((swiggy) => (
            <RestroCards key={swiggy.userid} swiggyobj={swiggy} />
          ))}
      </div>
    </div>
  );
};

export default Body;
