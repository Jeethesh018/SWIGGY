import Shimmer from "./Shimmer";
import useRestuarantMenu from "../utils/useRestaurantMenu";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resinfo] = useRestuarantMenu();
  let { resid1 } = useParams();

  return resinfo === null ? (
    <Shimmer />
  ) : (
    <div className=" p-10 m-10 flex flex-wrap ">
      {resinfo.map((items) => (
        <Link to={`/restaurant/${resid1}/${items.id}`}>
          <div className="p-10 m-10 bg-stone-200 rounded-md" key={items.id}>
            <img
              className="w-[200px] h-[200px] rounded-full"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.cloudinaryImageId}`}
            />
            <h1 className="font-bold">{items.name}</h1>
            <h2 className="pt-3">{items.costForTwo}</h2>
            <ul>
              <li className="mt-5">{items.avgRatingString}</li>
              <li className="mt-6">{items.locality}</li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantMenu;
