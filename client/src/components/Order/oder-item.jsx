import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Loading from "../Loading";
import style from './Order.module.scss'

const OrderItem = ({ item }) => {
  const products = useSelector((state) => state.products);
  const status = [
    "Chưa xác nhận",
    "Xác nhận",
    "Hết hàng"
  ]
  const statusOrder = [
    "Chưa xác nhận",
    "Đang giao",
    "Hoàn thành"
  ]
  const statusStyle = [
    "",
    "accept",
    "decline"
  ]
  return (
    <>
      {products.status === "loading" ? (
        <Loading />
      ) : (
        <Container className={style["order-item"]}>
          <div className={style["order-item_attribute"]}>
            <p>Tổng tiền: {item.attribute.price}</p>
            <p className={style[statusStyle[item.attribute.status]]}>Trạng thái đơn hàng: {status[item.attribute.status]}</p>
          </div>
          {item.products.map((prod) => {
            return products?.products?.map((prodData) => {
              if (prod.productId == prodData._id) return (
                <Row key={prod.productId} className={style["order-item_box"]}>
                    <Col sm={1}><img className={style["order-item--img"]} src={prodData.imageUrl} alt={prodData.title} /></Col>
                    <Col sm={3}>Tên sản phẩm: {prodData.title}</Col>
                    <Col sm={3}>Số lượng: {prod.quantity}</Col>
                    <Col sm={2} className={style[statusStyle[prod.status]]}>Trạng thái: {status[prod.status]}</Col>
                </Row>
              );
            });
          })}
        </Container>
      )}
    </>
  );
};

export default OrderItem;
