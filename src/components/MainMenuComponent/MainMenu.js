/**
 * React class component
 * contain main menu of site
 */

import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import  "./MainMenu.css"

export default class MainMenu extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="mainmenu">
        <div>
      <CardColumns>
        <Card>
          <Card.Img variant="top" src="/images/toa-heftiba-btK6EUoh8Tc-unsplash.jpg" />
          <Card.Body>
            <Card.Title>Fun recipes to make</Card.Title>
            <Card.Text>
            There are recipes that are an experience to read, prepare, mix, and serve.
            Welcome to taste
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a>go to recipy</a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="/images/steve-halama-dszKSf9S1Pw-unsplash.jpg" />
          <Card.Body>
            <Card.Title>Songs for the soul</Card.Title>
            <Card.Text>
            A collection of songs on various and topical topics
            That the soul loves 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a>go to songs</a>
          </Card.Footer>
        </Card>
        
      </CardColumns>
        </div>
      </div>
    )
  }
}
