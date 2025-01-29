import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import images from "../../../../public/img/images";

function AboutUs() {
  return (
    <Container fluid className="mt-5 p-0">
      <Row>
        <Col 
          xs={12}     
          md={6}      
          className="d-flex align-items-center justify-content-end p-0"
        >
          <img
            src={images.img1}
            alt="img1"
            className="img-fluid"   
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
        <Col 
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-start p-4"
        >
          <h4 className="mb-4">¿Quién es Foodies?</h4>
          <p>
            Elit irure ad nulla id elit laborum nostrud mollit irure. Velit
            reprehenderit sunt nulla enim aliquip duis tempor est culpa
            fugiat consequat culpa consectetur Lorem. Reprehenderit dolore
            culpa irure eiusmod minim occaecat et id minim ullamco.
          </p>
          <h4 className="mt-4">Contáctanos</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
