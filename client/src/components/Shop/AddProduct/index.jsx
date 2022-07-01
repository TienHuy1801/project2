import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { addProductApi } from "../../../../API/products";
import { fetchProductsRequest } from "../../../redux/product/action";
import { alertService } from "../../Alert/alert.service";
import style from "./AddProduct.module.scss";

const AddProduct = ({ setAddProduct }) => {
  const user = useSelector((state) => state.user);

  const title = useRef();
  const price = useRef();
  const imageUrl = useRef();
  const description = useRef();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await addProductApi(
        {
          title: title.current.value,
          price: price.current.value,
          imageUrl: imageUrl.current.value,
          description: description.current.value,
        },
        user.user.token
      );
      setAddProduct(false);
      // dispatch(fetchProductsRequest());
      location.reload();
      alertService.success("Thêm thành công");
    } catch (err) {
      alertService.error(err.response.data);
    }
  };

  return (
    <>
      <form onSubmit={submit} className={style["add-product"]}>
        <div className={style["add-product_item"]}>
          <label className={style["add-product_item--label"]} htmlFor="title">
            Tên sản phẩm
          </label>
          <input
            ref={title}
            type="text"
            required
            name="title"
            className={style["add-product_item--input"]}
          />
        </div>
        <div className={style["add-product_item"]}>
          <label
            className={style["add-product_item--label"]}
            htmlFor="imageUrl"
          >
            Link ảnh
          </label>
          <input
            ref={imageUrl}
            type="text"
            required
            name="imageUrl"
            className={style["add-product_item--input"]}
          />
        </div>
        <div className={style["add-product_item"]}>
          <label className={style["add-product_item--label"]} htmlFor="price">
            Giá
          </label>
          <input
            ref={price}
            type="number"
            required
            name="price"
            className={style["add-product_item--input"]}
          />
        </div>
        <div className={style["add-product_item"]}>
          <label
            className={style["add-product_item--label"]}
            htmlFor="description"
          >
            Giới thiệu
          </label>
          <textarea
            ref={description}
            required
            name="description"
            className={style["add-product_item--input"]}
          />
        </div>
        <div className={style["add-product_btn"]}>
          <Button color="primary" type="submit">
            Thêm sản phẩm
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
