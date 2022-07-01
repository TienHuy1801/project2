import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { editProductApi } from "../../../../API/products";
import { fetchProductsRequest } from "../../../redux/product/action";
import { alertService } from "../../Alert/alert.service";
import style from "./EditProduct.module.scss";

const EditProduct = ({ setEditProduct, product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [description, setDescription] = useState(product.description);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await editProductApi(
        {
          productId: product._id,
          title: title,
          price: price,
          imageUrl: imageUrl,
          description: description,
        },
        user.user.token
      );
      setEditProduct(false);
      dispatch(fetchProductsRequest());
      alertService.success("Chỉnh sửa thành công");
    } catch (err) {
      alertService.success(err);
    }
  };

  return (
    <>
      <form onSubmit={submit} className={style["edit-product"]}>
        <div className={style["edit-product_item"]}>
          <label className={style["edit-product_item--label"]} htmlFor="title">
            Tên sản phẩm
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
            name="title"
            className={style["edit-product_item--input"]}
          />
        </div>
        <div className={style["edit-product_item"]}>
          <label
            className={style["edit-product_item--label"]}
            htmlFor="imageUrl"
          >
            Link ảnh
          </label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            required
            name="imageUrl"
            className={style["edit-product_item--input"]}
          />
        </div>
        <div className={style["edit-product_item"]}>
          <label className={style["edit-product_item--label"]} htmlFor="price">
            Giá
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            required
            name="price"
            className={style["edit-product_item--input"]}
          />
        </div>
        <div className={style["edit-product_item"]}>
          <label
            className={style["edit-product_item--label"]}
            htmlFor="description"
          >
            Giới thiệu
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            name="description"
            className={style["edit-product_item--input"]}
          />
        </div>
        <div className={style["edit-product_btn"]}>
          <Button color="primary" type="submit">
            Chỉnh sửa
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
