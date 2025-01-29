import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MarkedTitle = ({ normalTextUpper, normalTextLower, header, home, textStyle }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className={`text-${header ? 'left' : 'center'}`}>
          <h1>{normalTextUpper}</h1>
          <h1 style={{ ...textStyle, color: home ? 'black' : 'white'}}>{normalTextLower}</h1>  
        </Col>
      </Row>
    </Container>
  );
};

export default MarkedTitle;
