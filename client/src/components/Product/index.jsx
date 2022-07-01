import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { deleteProductApi } from "../../../API/products";
import { fetchProductsSuccess } from "../../redux/product/action";
import Link from "next/link";
import EditProduct from "../Shop/EditProduct";
import style from "./product.module.scss";
import styleBg from "../Shop/EditProduct/EditProduct.module.scss";
import { useRouter } from "next/dist/client/router";
import { addToCartApi } from "../../../API/cart";
import { fetchCartRequest } from "../../redux/cart/action";
import { alertService } from "../Alert/alert.service";

const Product = ({ product, admin }) => {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const route = useRouter();
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const deleteProduct = async (productId) => {
    try {
      await deleteProductApi(productId, user.user.token);
      alertService.success("Xóa thành công");
      dispatch(
        fetchProductsSuccess(
          products.products.filter((prod) => prod._id != productId)
        )
      );
    } catch (error) {
      console.log(error);
      // alertService.error(error.response.data);
    }
  };

  const addToCart = async (productId) => {
    try {
      if (user.status === "succeeded") {
        const mess = await addToCartApi(
          { productId: productId },
          user.user.token
        );
        dispatch(fetchCartRequest(user.user.token));
        alertService.success(mess.data);
      } else {
        alertService.error("Chưa đăng nhập");
        route.push("/login");
      }
    } catch (error) {
      alertService.error(error.response.data);
    }
  };

  if (product)
    return (
      <>
        {edit ? (
          <>
            <div
              className={styleBg["background"]}
              onClick={() => setEdit(false)}
            ></div>
            <EditProduct setEditProduct={setEdit} product={product} />
          </>
        ) : (
          <></>
        )}
        <Card className={style["product"]}>
          <CardTitle className={style["product_title"]}>
            {product.title}
          </CardTitle>
          <CardImg className={style["product_img"]} src={product.imageUrl} />
          <CardSubtitle className={style["product_sub"]}>
            {product.price}
          </CardSubtitle>
          {admin ? (
            <div className={style["product_btn"]}>
              <Button color="info" onClick={() => setEdit(true)}>
                Chỉnh sửa
              </Button>
              <Button color="danger" onClick={() => deleteProduct(product._id)}>
                Xóa
              </Button>
            </div>
          ) : (
            <div className={style["product_btn"]}>
              <Link href="/product/[id]" as={`/product/${product._id}`}>
                <a>
                  <Button color="info">Chi tiết</Button>
                </a>
              </Link>
              <Button color="primary" onClick={() => addToCart(product._id)}>
                Thêm vào giỏ hàng
              </Button>
            </div>
          )}
        </Card>
      </>
    );
  else return <></>;
};

export default Product;
