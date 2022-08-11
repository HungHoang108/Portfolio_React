import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './card.styles.scss'

const ProjectCard = ({title, description, image, url, gitHubUrl}) => {
  return (
    <div className='card-route-box'>
        <Card className='card-box'>
            <div className='card-route-content'>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title className='card-route-title'><b>{title}</b></Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button href={gitHubUrl} target="_blank" className='card-route-button btn-github' variant="info">Github</Button>
                    {url && <Button href={url} target="_blank" className='card-route-button' variant="success">Live Demo</Button>}
                    
                </Card.Body>
            </div>

        </Card>
    </div>
  )
}

export default ProjectCard