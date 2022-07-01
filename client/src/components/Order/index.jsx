import { useEffect, useState } from "react";
import { orderApi } from "../../../API/order";
import Loading from "../Loading";
import OrderItem from "./oder-item";

const OrderComp = ({ token }) => {
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await orderApi(token);
      if (response.data) setOrders(response.data);
    }
    fetchData();
  }, []);
  return (
    <>
      {orders != null ? (
        orders.map((orderItem, id) => (
          <OrderItem key={id} item={orderItem} />
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default OrderComp;
