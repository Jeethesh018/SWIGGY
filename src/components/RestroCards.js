const RestroCards = ({ swiggyobj }) => {
  return (
    <div className="p-5 m-5 hover:bg-transparent  border-solid border-stone-400 border-2 rounded-lg bg-stone-100 shadow-lg">
      <img
        className="w-[180px] h-[200px] bg-stone-100 rounded-full"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${swiggyobj.imageId}`}
      />
    </div>
  );
};

export default RestroCards;
