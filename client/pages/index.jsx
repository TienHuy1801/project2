import HomePage from "../src/components/HomePage";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../src/components/Loading";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const route = useRouter();
  const search = route.query.search;
  const products = useSelector((state) => state.products);
  const productsShop = useSelector((state) => state.productsShop);

  return (
    <>
      {(products.status === "loading" || productsShop.status === "loading") ? (
        <Loading />
      ) : (
        <HomePage
          products={products?.products?.filter(
            (prod) => !productsShop.products?.includes(prod._id) && (search ? prod?.title?.toLowerCase().includes(search?.toLowerCase()) : true)
          )}
          // products={products?.products?.filter((prod) => {
          //   if (search)
          //     return (
          //       prod.shopId != user.user?.shopId && prod?.title?.toLowerCase().includes(search?.toLowerCase())
          //     );
          //   else return prod.shopId != user.user?.shopId;
          // })}
        />
      )}
    </>
  );
};

export default Home;
