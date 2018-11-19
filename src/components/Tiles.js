import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Tiles = (props) => (
  <Card centered>
    <Image src={props.cardImage || null} />
    <Card.Content>
      <Card.Header>{props.cardHeader}</Card.Header>
      <Card.Description>{props.cardDescription}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a
        href={props.cardURL}
        target="_blank"
        rel="noopener noreferrer"
        title={props.cardHeader}
      >
        {props.cardURL}
      </a>
    </Card.Content>
  </Card>
)

export default Tiles;