import React from 'react'

import { Button, Card } from 'react-bootstrap';

const News = (props) => {
    const {title, description, urlToImage} = props.article;
  return (
    <>
        <Card style={{ width: '100%', height: '500px' }}>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
            <Card.Title>{title.slice(0, 50) + '...'}</Card.Title>
            <Card.Text>{description.slice(0, 150) + '...'}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </>
  )
}

export default News