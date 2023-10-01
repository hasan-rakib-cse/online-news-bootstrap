import React, { useEffect, useState } from 'react'

import News from '../News/News'
import { v4 as uuidv4 } from 'uuid';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TopHeadline = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=594cc922de8b45aa9fff59a30f2cd992')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
    
      
    }, [])
    
  return (
    <div>
        <h1>Top Headline: {articles.length}</h1>
        <Container className='main'>
        <Row>
            {articles.map(article => {
                return (
                    
                    <Col key={uuidv4()} xs={12} md={6} lg={4} className='h-100 mb-4'>
                        <News key={uuidv4()} article={article} />
                    </Col>
                )
            })}
        </Row>
        </Container>
    </div>
  )
}

export default TopHeadline