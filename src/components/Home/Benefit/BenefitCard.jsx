
import React from 'react';
import Card from 'react-bootstrap/Card';


const BenefitCard = ({ title, description }) => {
  return (
    <Card className="text-center m-2" style={{ width: '18rem', border: 'none' }}>
       <Card.Body > 
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BenefitCard;
