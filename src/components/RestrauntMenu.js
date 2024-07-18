import Shimmer from "./Shimmer";
import useRestuarantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [resinfo] = useRestuarantMenu();

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
