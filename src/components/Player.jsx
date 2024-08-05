import React from 'react'
import {Button, Card} from 'react-bootstrap'

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div>
      <Card style={{ width: "18rem", marginTop: "5%" }}>
        <Card.Img
          style={{ width: "16rem", height: "18rem" }}
          variant="top"
          src={imageUrl}
          alt={name}
        />
        <Card.Body>
          <Card.Title>Player Card</Card.Title>
          <Card.Text>Name:{name}</Card.Text>
          <Card.Text>team:{team}</Card.Text>
          <Card.Text>nationality:{nationality}</Card.Text>
          <Card.Text>jerseyNumber:{jerseyNumber}</Card.Text>
          <Card.Text>age:{age}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
Player.defaultProps={  
    name: 'Lionel Messi', 
    team: 'Inter Miami',
    nationality: "default",
    jerseyNumber: 10,
    age: 37,
    imageUrl: "https://cdn.futwiz.com/assets/img/fifa19/faces/251816263.png",
  }

export default Player