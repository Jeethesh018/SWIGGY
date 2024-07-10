const RestroCards = ({ swiggyobj }) => {
  return (
    <div className="res-card">
      <img className="meghanafood" src={swiggyobj.cloudinaryImageId} />
      <h3>{swiggyobj.name}</h3>
      <h3>{swiggyobj.locality}</h3>
      <h4>{swiggyobj.avgRating}</h4>
      <h4>{swiggyobj.cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestroCards;
