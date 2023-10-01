import React from 'react'

import { Button, Container } from 'react-bootstrap';
const Header = () => {
  return (
    <>
      <Container fluid>
        <h1>Breaking News</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <p><Button variant="dark">Dark</Button></p>
      </Container>
    </>
  )
}

export default Header