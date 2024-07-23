import useItemsMenuAPI from "../utils/useItemsMenuAPI";
import { useContext, useState } from "react";
import { toggleContext } from "../App";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { additem } from "../utils/Redux/cartSlice";

const ItemsMenu = () => {
  const [items] = useItemsMenuAPI();
  const { toggle, setToggle } = useContext(toggleContext);
  const [showIndex, setShowIndex] = useState(0);
  const dispatch = useDispatch();

  const Header = items[0]?.card?.card;

  const rating = items[2]?.card?.card?.info;
  const deals = items[3]?.card.card.gridElements.infoWithStyle.offers;
  const foodItems = items[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter(
      (item) =>
        item?.card?.card?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge" &&
        item?.card?.card?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel" &&
        item?.card?.card?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress" &&
        item?.card?.card?.["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
    )
    .map((item) => item?.card.card);

  console.log(foodItems);

  function handletoggle(i) {
    setShowIndex(i);
    setToggle(!toggle);
    console.log(i);
  }

  return (
    <>
      <div className="">
        <h1 className="font-bold text-4xl text-center pb-[20px]">
          {Header?.text}
        </h1>
        <div className="border-2 bg-stone-200  ml-[500px] w-[700px] rounded-xl shadow-lg p-10 m-10">
          <div>
            <h2 className="pb-[20px]">
              <img
                className="rounded-full w-[200px]"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${rating?.cloudinaryImageId}`}
              />
              <hr></hr>
              {rating?.avgRating}({rating?.totalRatingsString}) :
              {rating?.costForTwoMessage}
            </h2>
            <h3 className="pb-[20px]">{rating?.cuisines.join(",")}</h3>
            <h3 className="pb-[20px]">{rating?.sla.slaString}</h3>
            <h3 className="pb-[20px]">{rating?.locality}</h3>
            <hr></hr>
            <h3>{rating?.feeDetails.message}</h3>
          </div>
        </div>
        <div className="">
          <div className="flex pr-[100px] ml-[200px] w-[80%]">
            {deals?.map((item) => (
              <>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${item.info.offerLogo}`}
                />
                <h1>{item.info.header}</h1>
                <br></br>
                <h1>{item.info.couponCode}</h1>
              </>
            ))}
          </div>
        </div>
        <div className="p-10 m-40 cursor-pointer ">
          {foodItems?.map((item, i) => (
            <>
              <div
                onClick={() => handletoggle(i)}
                key={item.title}
                className="shadow-sm"
              >
                <h1 className="w-[80%] h-20 bg-stone-300 mt-10 font-bold p-5 m-5  text-3xl">
                  {item.title}
                </h1>
              </div>
              {showIndex === i && toggle ? (
                <div className="p-5 m-5">
                  {item?.itemCards?.map((item) => (
                    <>
                      <div>
                        <h1 className="font-bold text-2xl">
                          {item.card.info.name}
                        </h1>
                        <h3 className="font-semibold">
                          Rs.
                          {item?.card?.info?.defaultPrice / 100 ||
                            item?.card?.info?.price / 100}{" "}
                          Only.
                        </h3>
                        <h3 className="font-semibold">
                          ⭐
                          {item?.card?.info?.ratings?.aggregatedRating
                            ?.rating || "No ratings"}{" "}
                          (
                          {
                            item?.card?.info?.ratings?.aggregatedRating
                              ?.ratingCountV2
                          }
                          )
                        </h3>
                      </div>
                      <img
                        className="ml-[730px] mt-[-65px] rounded-lg"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                      />
                      <Button
                        onClick={() => dispatch(additem(item))}
                        className="ml-[730px] mt-[-65px] rounded-lg bg-black w-[200px] h-[50px] font-bold text-slate-50"
                      >
                        Add
                      </Button>
                      <hr></hr>
                    </>
                  ))}
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemsMenu;
