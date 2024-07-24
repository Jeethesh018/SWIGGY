import React, { createContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../public/css/style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestrauntMenu";
import useStatus from "./utils/useStatus";
import ItemsMenu from "./components/ItemsMenu";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./utils/Redux/appStore";

const Contact = lazy(() => import("./components/Contact"));

export const toggleContext = createContext();

const AppLayout = () => {
  const [status] = useStatus();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="">
      {!status ? (
        <h3 style={{ textAlign: "center" }}>
          You are offline!! Please check Your Internet Connection!🔴
        </h3>
      ) : (
        <Provider store={store}>
          <toggleContext.Provider value={{ toggle, setToggle }}>
            <div className="app">
              <Header />
              <Outlet />
            </div>
          </toggleContext.Provider>
        </Provider>
      )}
    </div>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resid1",
        element: <RestaurantMenu />,
      },
      {
        path: "restaurant/:resid1/restaurant_id/:itemsid",
        element: <ItemsMenu />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
