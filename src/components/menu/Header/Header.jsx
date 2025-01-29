import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import images from "../../../../public/img/images";
import './Header.css'; 

function Header() {
  return (
    <Container 
      fluid 
      className="p-0 m-0 bg-black overflow-hidden"
      style={{ minHeight: "450px" }} 
    >
      <Row className="g-0">
        <Col 
          xs={12}
          md={6}
          className="order-1 order-md-2 position-relative text-end d-flex align-items-center justify-content-end"
          style={{ minHeight: "450px" }}
        >
          <img
            src={images.back}
            alt="background"
            style={{
              width: "100%",
              height: "100%",  
              objectFit: "cover", 
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 1
            }}
          />
          <img
            src={images.menuHeader}
            alt="menu header"
            style={{
              width: "100%",
              height: "100%",  
              objectFit: "cover", 
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 2
            }}
          />
        </Col>

       
        <Col 
          xs={12}      
          md={6}       
          className="order-2 order-md-1 d-flex flex-column justify-content-center align-items-start text-white p-5"
        >
          <h1 className="w-100">Cada sabor</h1>
          <h1 className="w-100">es una nueva</h1>
          <h1 className="w-100 mb-3" id="text-design" > <span style={{ backgroundColor: '#FFD600', color: 'black', padding: '0 4px' }}>experiencia</span></h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
