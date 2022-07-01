import style from "./ProductDetail.module.scss";
import {
  Button,
  Card,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { useSelector } from "react-redux";
import { addToCartApi } from "../../../API/cart";
import { alertService } from "../Alert/alert.service";
import { useRouter } from "next/dist/client/router";

const ProductDetailComp = ({ product }) => {
  const user = useSelector((state) => state.user);
  const route = useRouter();

  const addToCart = async (productId) => {
    try {
      if (user.status === "succeeded") {
        const mess = await addToCartApi(
          { productId: productId },
          user.user.token
        );
        alertService.success(mess.data);
      } else {
        alertService.error("Chưa đăng nhập");
        route.push("/login");
      }
    } catch (error) {
      alertService.error(error.response.data);
    }
  };

  return (
    <div className={style["product-detail"]}>
      <Card className={style["product-detail_box"]}>
        <CardTitle className={style["product-detail_title"]}>
          {product.title}
        </CardTitle>
        <CardImg
          className={style["product-detail_img"]}
          src={product.imageUrl}
        />
        <CardSubtitle className={style["product-detail_sub"]}>
          {product.price}
        </CardSubtitle>
        <CardText className={style["product-detail_description"]}>
          {product.description}
        </CardText>
        <div className={style["product-detail_btn"]}>
          <Button color="primary" onClick={() => addToCart(product._id)}>
            Thêm vào giỏ hàng
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailComp;
