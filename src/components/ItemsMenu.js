import useItemsMenuAPI from "../utils/useItemsMenuAPI";

const ItemsMenu = () => {
  const [items] = useItemsMenuAPI();
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
        <div className="p-10 m-40">
          {foodItems?.map((item) => (
            <>
              <h1 className="w-[80%] h-20 bg-stone-300 mt-10 ">{item.title}</h1>
              {/* <div>{item?.itemCards.map((item)=>item.card.info)}</div> */}
            </>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemsMenu;
