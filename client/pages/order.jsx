import { useSelector } from "react-redux";
import Loading from "../src/components/Loading";
import OrderComp from "../src/components/Order";

const Order = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.status !== "succeeded" ? (
        <Loading />
      ) : (
        <OrderComp token={user.user.token} />
      )}
    </>
  );
};

export default Order;
