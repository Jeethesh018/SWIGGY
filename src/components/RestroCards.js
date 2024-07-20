import images from "../../public/images/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png";

const RestroCards = ({ swiggyobj }) => {
  return (
    <div className="p-5 m-5 hover:bg-transparent  border-solid border-stone-400 border-2 rounded-lg bg-stone-300 shadow-lg">
      <img className="w-[150px] h-[200px]" src={images} />
      <h3 className="font-bold text-center">{swiggyobj.action.text}</h3>
      <h3>{swiggyobj.locality}</h3>
      <h4>{swiggyobj.avgRating}</h4>
      <h4>{swiggyobj.cuisines}</h4>
    </div>
  );
};

export default RestroCards;
