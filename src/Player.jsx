import React from 'react'
import {Button, Card} from 'react-bootstrap'
const Player = ({player}) => {
  return (
    <div>
      <Card style={{ width: "18rem",marginTop:"5%" }}>
        <Card.Img
          style={{ width: "16rem",height: "18rem" }}
          variant="top"
          src={player.imageUrl}
          alt={player.name}
        />
        <Card.Body>
          <Card.Title>Player Card</Card.Title>
          <Card.Text>Name:{player.name}</Card.Text>
          <Card.Text>team:{player.team}</Card.Text>
          <Card.Text>nationality:{player.nationality}</Card.Text>
          <Card.Text>jerseyNumber:{player.jerseyNumber}</Card.Text>
          <Card.Text>age:{player.age}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Player