import React from "react";
import { Col, Container, Row, Button, Form, InputGroup } from "react-bootstrap";
import images from "../../../../public/img/images";
import './Branches.css'; 

function Branches() {
    return (
        <Container fluid className="p-0 m-0 mt-5">
            <Row className="justify-content-center">
                <Col md={6} className="text-center mb-4">
                    <h1 className="mb-4">Estamos para ti</h1>
                    <Row>
                        <Col xs={6} className="p-0">
                            <Button variant="dark" className="button-custom w-100"> 
                                <img src={images.food} alt="Para Llevar" className="Comments-icon" style={{width:'45px', marginRight:'15px'}}/> Para Llevar
                            </Button>  
                        </Col>
                        <Col xs={6} className="p-0">
                            <Button variant="dark" className="button-custom w-100"> 
                                <img src={images.car} alt="Domicilio" className="Comments-icon" style={{width:'45px', marginRight:'15px'}}/>Domicilio
                            </Button>  
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="p-0"> 
                            <InputGroup>
                                <Form.Control
                                    id="inlineFormInputGroup"
                                    placeholder="Buscar nombre o dirección"
                                    className="text-center"
                                    style={{
                                        borderRadius: '0',
                                        backgroundColor: 'white',
                                        borderColor: 'black',
                                    }}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="p-0">
                    <img 
                        src={images.mapSV} 
                        alt="mapSV" 
                        className="Header-icon"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Branches;
