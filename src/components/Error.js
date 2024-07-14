import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ color: "red", backgroundColor: "yellow" }}>{err.data}</div>
  );
};

export default Error;
