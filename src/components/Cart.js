import { useSelector } from "react-redux";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/Redux/cartSlice";

function Cart() {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      {cartitems.map((item) => (
        <>
          <div>
            {" "}
            <div>
              <h1 className="font-bold text-2xl">{item.card.info.name}</h1>
              <h3 className="font-semibold">
                Rs.
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}{" "}
                Only.
              </h3>
              <h3 className="font-semibold">
                ⭐
                {item?.card?.info?.ratings?.aggregatedRating?.rating ||
                  "No ratings"}{" "}
                ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </h3>
            </div>
            <img
              className="ml-[730px] mt-[-65px] rounded-lg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
            />
          </div>
          <Button
            onClick={() => {
              dispatch(removeItem(item.card.info.name));
              console.log(item);
            }}
            className="ml-[1330px] mt-[-65px] rounded-lg bg-black w-[200px] h-[50px] font-bold text-slate-50"
          >
            Delete
          </Button>
        </>
      ))}
    </>
  );
}

export default Cart;
