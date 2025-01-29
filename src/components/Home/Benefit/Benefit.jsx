import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BenefitCard from './BenefitCard';
import MarkedTitle from './MarkedTitle';
import { benefits } from '../../../data/benefits';
import images from "../../../../public/img/images";
import './Benefit.css';

const Benefit = () => {
  const titleStyle = {
    backgroundColor: '#FFD600'  
  };

  return (
    <Container fluid style={{ padding: '50px 0' }}>
      <Row>
      <Col xs={12} md={5} lg={4} className="position-relative p-0" style={{ minHeight: '300px' }} id='image-style'>
    <img src={images.celphone} alt="Mock cellphone image" className="w-100 h-100" />
</Col>

        <Col xs={12} md={7} lg={6}>
          <MarkedTitle
            normalTextUpper="Obten más beneficios"
            normalTextLower="Descarga nuestra App"
            home={true}
            textStyle={titleStyle}
          />
          <Row className="justify-content-center mt-3">
            {benefits.map((benefit, index) => (
              <Col sm={6} key={index} className="d-flex justify-content-center mb-3">
                <BenefitCard {...benefit} index={index} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Benefit;
