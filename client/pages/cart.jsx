import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartComp from "../src/components/Cart";
import Loading from "../src/components/Loading";
import { fetchCartRequest } from "../src/redux/cart/action";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.status === "idle" && user.status === "succeeded")
      dispatch(fetchCartRequest(user.user.token));
  }, [user]);

  return (
    <>
      {cart.status === "loading" ? (
        <Loading/>
      ) : (
        <CartComp cart={cart.cart} />
      )}
    </>
  );
};

export default Cart;
