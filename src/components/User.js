import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(10);

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h3>count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  );
};

export default User;
