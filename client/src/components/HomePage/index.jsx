import { Col, Container, Row } from "reactstrap";
import Product from "../Product";

const HomePage = ({ products }) => {
  
    return (
      <Container>
        <Row>
          {products ? (
            products.map((product) => (
              <Col sm="3" key={product._id}>
                <Product product={product} admin={false} />
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
      </Container>
    );
};

export default HomePage;
