import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { acceptDeliApi, declineDeliApi } from "../../../../API/shop";
import { alertService } from "../../Alert/alert.service";
import Loading from "../../Loading";
import style from './Delivering.module.scss';

const DeliveringItem = ({ item }) => {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const status = [
    "Chưa xác nhận",
    "Xác nhận",
    "Hết hàng"
  ]
  const statusStyle = [
    "",
    "accept",
    "decline"
  ]

  const accept = async (orderItemId) => {
    try {
      const mess = await acceptDeliApi(orderItemId, user.user.token);
      alertService.success(mess.data);
      location.reload();
    } catch (error) {
      alertService.error(error.response.data);
    }
  }

  const decline = async (orderItemId) => {
    try {
      const mess = await declineDeliApi(orderItemId, user.user.token);
      alertService.success(mess.data);
      location.reload();
    } catch (error) {
      alertService.error(error.response.data);
    }
  }

  return (
    <>
      {products.status === "loading" ? (
        <Loading />
      ) : (
        <Container className={style["deli-item"]}>
          {
            products?.products?.map((prodData) => {
              if (item.productId == prodData._id) return (
                <Row key={item.productId} className={style["deli-item_box"]}>
                    <Col sm={3}><img className={style["deli-item--img"]} src={prodData.imageUrl} alt={prodData.title} /></Col>
                    <Col sm={4} style={{fontWeight: "bold"}}>Tên sản phẩm: {prodData.title}</Col>
                    <Col sm={2} style={{fontWeight: "bold"}}>Số lượng: {item.quantity}</Col>
                    <Col sm={3}>
                      <p className={style[statusStyle[item.status]]}>Trạng thái: {status[item.status]}</p>
                      {
                        (item.status == 0) ? <>
                      <Button color="success" style={{marginRight: "10px"}} onClick={() => accept(item._id)}>Xác nhận</Button> 
                      <Button color="danger" onClick={() => decline(item._id)}>Hết hàng</Button> </> : <></>
                      }
                    </Col>
                </Row>
              );
            })
          }
        </Container>
      )}
    </>
  );
};

export default DeliveringItem;
