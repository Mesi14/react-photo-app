import {Container, Row, Col, Card, Button, Nav} from 'react-bootstrap';

const Photos = () => {
 return (
  <Container>
    <Row>
      <Col>
        <Card className="mt-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../assets/onion.jpg")} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <Nav.Link href="/details/:id">Photo Id</Nav.Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mt-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../assets/cabs.jpg")} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <Nav.Link href="/details/:id">Photo Id</Nav.Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mt-5" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../assets/computer.jpg")} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              <Nav.Link href="/details/:id">Photo Id</Nav.Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
}

export default Photos;

// function ResponsiveAutoExample() {
//   return (
//     <Container>
//       <Row>
//         <Col={8}>sm=8</Col=>
//         <Col sm={4}>sm=4</Col>
//       </Row>
//       <Row>
//         <Col sm>sm=true</Col>
//         <Col sm>sm=true</Col>
//         <Col sm>sm=true</Col>
//       </Row>
//     </Container>
//   );
// }
