import React from 'react';
import { Col, Container, Row, Form, InputGroup, Button } from 'react-bootstrap';
import './Comments.css';

function Comments() {
    return (
        <Container fluid className="p-0 m-0" style={{  backgroundColor: 'black', padding: '100px 15px' }}>  
            <Row className="d-flex flex-column align-items-center justify-content-center text-center" style={{ color: '#FFFFFF', marginBottom: 60, padding: '50px 15px' }}>
                <h2>Cuéntanos tu experiencia</h2>
                <h5>Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</h5>
            </Row>
            <Form>
                <Row className="gx-0 gx-md-3 justify-content-center" style={{ padding: '20px 0' }}>  
                    <Col md={4} className="p-4">  
                        <Form.Group className="mb-4">  
                            <Form.Label style={{ color: '#FFC700', fontSize: '16px' }}>Nombre y Apellido</Form.Label>  
                            <Form.Control
                                className="mb-3"
                                id="inlineFormInput"
                                placeholder="Jane Doe"
                                style={{backgroundColor: 'black', borderColor: '#FFC700', color: '#FFD600'}}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label style={{ color: '#FFFFFF', fontSize: '16px' }}>Correo electrónico</Form.Label>  
                            <InputGroup>
                                <Form.Control id="inlineFormInputGroup" placeholder="j.doe@correo.com" style={{backgroundColor: 'black', color: '#FFFFFF'}} />
                            </InputGroup>
                        </Form.Group>
                    </Col>

                    <Col md={4} className="p-4">
                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ color: '#FFFFFF', fontSize: '16px' }}>Mensaje</Form.Label> 
                            <Form.Control as="textarea" placeholder='El día de ahora mi experiencia fue...' rows={5} style={{backgroundColor: 'black', borderColor: '#FFD600', color: '#FFFFFF'}} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center pb-5">
                    <Col md={8} className="d-flex justify-content-end">
                        <Button type="submit" className="mb-3" style={{ backgroundColor: '#FFD600', borderColor: '#FFD600', color: 'black', padding: '10px 20px' }}>
                            Enviar comentarios
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Comments;
