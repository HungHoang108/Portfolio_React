import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './card.styles.scss'

const ProjectCard = () => {
  return (
    <div className='card-route-box'>
        <Card className='card-box'>
            <div className='card-route-content'>
                <Card.Img variant="top" src="https://picsum.photos/300/100" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis ab, dicta dignissimos magni tempore omnis odio, commodi vero blanditiis beatae officiis unde. Dignissimos, voluptatum! Maiores voluptatum alias illum saepe!
                    </Card.Text>
                    <Button className='card-route-button' variant="info">Github</Button>
                </Card.Body>
            </div>

        </Card>
    </div>
  )
}

export default ProjectCard