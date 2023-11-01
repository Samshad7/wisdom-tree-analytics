import React from "react";
import Card from "react-bootstrap/Card";
import data from "./data";
import './CardHandler.css';

const CardHandler = () => {
  return (
    <div className="cards">
      {data.map((item, i) => {
        return (
          <Card style={{width:"400px",borderRadius:"16px"}}>
            <Card.Img variant="top" src={item.img} alt={item.id} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardHandler;
