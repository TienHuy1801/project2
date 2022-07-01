import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import Home from "..";
import ProductDetailComp from "../../src/components/ProductDetail";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);
  const router = useRouter();
  const { id } = router.query;
  var product;
  if (products.status === "succeeded") {
    product = products?.products?.filter((prod) => prod._id == id)[0];
  }

  if (product) return <ProductDetailComp product={product} />;
  else return <Home />;
};

export default ProductDetail;
