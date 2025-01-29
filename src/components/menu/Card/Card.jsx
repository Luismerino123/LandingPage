import { Col, Card } from "react-bootstrap";
import React from "react";

function CardMenu({ hamburgesa }) {
    const { id, name, image, description, price, type } = hamburgesa;

    return (
       
        <Col xs={12} sm={12} md={6} lg={3} className="mb-4">  
            <Card style={{ borderRadius: 25, marginTop: 20, border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <Card.Img variant="top" src={`/img/${image}.jpeg`} alt={`imagen de ${name}`} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>
                        {type}  ${price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardMenu;
