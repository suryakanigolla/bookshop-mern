import CartPage from "pages/CartPage";
import IndexPage from "pages/IndexPage";
import OrdersPage from "pages/OrdersPage";

const routes = [
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "orders",
    element: <OrdersPage />,
  },
];

export default routes;
