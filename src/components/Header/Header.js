import React from 'react'

import { Button, Container } from 'react-bootstrap';
const Header = () => {
  return (
    <>
      <Container fluid className='text-center'>
        <h1>Breaking News</h1>
        <p>This is one of best breaking news</p>
        <p><Button variant="success">see the featured news below</Button></p>
      </Container>
    </>
  )
}

export default Header