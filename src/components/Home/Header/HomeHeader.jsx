import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import images from "../../../../public/img/images";
import './HomeHeader.css'; 

function HomeHeader() {
    return (
        <Container fluid className="p-0 m-0">
            <Row>
                <Col xs={12} md={6} className="order-2 order-md-1 d-flex flex-column justify-content-center align-items-center p-5">
                    <h1 style={{ alignSelf: 'flex-start', width: '100%'}}>Un nuevo</h1>
                    <h1 style={{ alignSelf: 'flex-start', width: '100%'}}>sabor está en</h1>
                    <h1 style={{ alignSelf: 'flex-start', width: '100%', marginBottom: 20}} id="text-design">
                        <span style={{ backgroundColor: '#FFD600', color: 'black', padding: '0 4px' }}>la ciudad</span>
                    </h1>
                    <p>Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.</p>
                    <h4 style={{ alignSelf: 'flex-start', width: '100%', marginTop: 40 }}>Contáctanos</h4>
                </Col>
                <Col xs={12} md={6} className="order-1 order-md-2 text-md-end d-flex align-items-center justify-content-md-end p-0">
                    <img 
                        src={images.mask_hero} 
                        alt="mask_hero" 
                        className="Header-icon"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '800px' 
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default HomeHeader;


