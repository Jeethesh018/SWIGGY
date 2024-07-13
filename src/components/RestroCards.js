import images from "../../public/images/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png";

const RestroCards = ({ swiggyobj }) => {
  return (
    <div className="res-card">
      <img className="meghanafood" src={images} />
      <h3>{swiggyobj.action.text}</h3>
      <h3>{swiggyobj.locality}</h3>
      <h4>{swiggyobj.avgRating}</h4>
      <h4>{swiggyobj.cuisines}</h4>
    </div>
  );
};

export default RestroCards;
