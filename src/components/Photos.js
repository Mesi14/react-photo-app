import "../styles/Photos.css";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Photos = () => {
  const [photos, setPhotosState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/photos");
      setPhotosState(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const makeSingleCard = () => {
    return photos.map(({ id, shortDesc, srcImage, title }) => (
      <Fragment key={id}>
        <Col xs={4} md={4} lg={4} key={id}>
          <Card className="thumbnail mt-5">
            <Card.Img variant="top" src={srcImage} />
            <Card.Body className="card-body">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{shortDesc}</Card.Text>
              <Button className="card-btn" variant="primary">
                <Nav.Link href={`/details/${id}`}>Details</Nav.Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Fragment>
    ));
  };

  return (
    <Container>
      <Row>{makeSingleCard()}</Row>
    </Container>
  );
};

export default Photos;
