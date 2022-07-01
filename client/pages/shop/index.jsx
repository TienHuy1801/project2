import { useState } from "react";
import { Button } from "reactstrap";
import AddProduct from "../../src/components/Shop/AddProduct";
import MyProduct from "../../src/components/Shop/MyProduct";
import style from "../../src/components/Shop/AddProduct/AddProduct.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";
import Loading from "../../src/components/Loading"; 

const Shop = () => {
  const [addProduct, setAddProduct] = useState(false);
  const products = useSelector((state) => state.products);
  const productsShop = useSelector((state) => state.productsShop);

  return (
    <>
      <div
        style={{ display: "flex", marginTop: "20px", justifyContent: "center" }}
      >
        <Button color="primary" onClick={() => setAddProduct(!addProduct)}>
          Thêm sản phẩm
        </Button>
        <Link href="/shop/delivering">
          <a>
            <Button color="info" style={{ marginLeft: "50px" }}>
              Danh sách đơn hàng
            </Button>
          </a>
        </Link>
      </div>
      {(products.status === "loading" || productsShop.status === "loading") ? (
        <Loading />
      ) : (
        <MyProduct
          products={products?.products?.filter(
            (prod) => productsShop.products?.includes(prod._id)
          )}
        />
      )}

      {addProduct ? (
        <>
          <div
            className={style["background"]}
            onClick={() => setAddProduct(false)}
          ></div>
          <AddProduct setAddProduct={setAddProduct} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Shop;
