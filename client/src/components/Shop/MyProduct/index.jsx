import { Col, Container, Row } from "reactstrap";
import Product from "../../Product";

const MyProduct = ({ products }) => {
  return (
    <Container>
      <Row>
        {products ? (
          products.map((product) => (
            <Col sm="3" key={product._id}>
              <Product product={product} admin={true} />
            </Col>
          ))
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default MyProduct;
