import { useParams } from "react-router";
import "../styles/Details.css";
import { Button, Nav, Row, Col, Form, FloatingLabel, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";

function Details() {
  const [photo, setPhoto] = useState({});
  const parameters = useParams();
  const [validated, setValidated] = useState(false);
  const [singleComment, setSingleComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`http://localhost:3001/photos/${parameters.imgId}`);
        console.log(resp.data)
        setPhoto(resp.data);
      } catch (error) {
        console.log("this error is from single photo page", error);
      }
    };
    window.setTimeout(() => fetchData(), 100)
  }, [parameters.imgId]);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (singleComment === "") {
      return;
    }
    makeComment();
    setValidated(true);
  };

  const makeComment = async () => {
    try {
      const currPhotoState = { ...photo };
      currPhotoState.comments.push(singleComment);
      setPhoto(currPhotoState);
      setSingleComment("");
      await axios.put(`http://localhost:3001/photos/${parameters.imgId}`, photo)
    } catch (error) {
      console.log("this is the error from making a comment", error);
    }
  }

  const onTextAreaChange = (ev) => {
    setSingleComment(ev.target.value);
  }

  return (
    <>
      <div className="details-descript">
        <img alt={photo.title} src={`/${photo.srcImage}`} />
        <div className="text-details">
          <h3>{photo.title}</h3>
          <p>{photo.desc}</p>
          <Button variant="primary">
            <Nav.Link href="/">Go back</Nav.Link>
          </Button>
        </div>
      </div>
      <div>
        <ListGroup>
          <ListGroup.Item>All comments</ListGroup.Item>
          {photo.comments !== null ? <ListGroup.Item>No comments yet!</ListGroup.Item> : photo.comments.map((comment, index) => <ListGroup.Item key={index}>{comment}</ListGroup.Item>)} 
        </ListGroup>
      </div>
      <div className="mt-5">
        <h1>Please leave a comment</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue=""
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue=""
              />
              <Form.Control.Feedback>Valid!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <FloatingLabel controlId="floatingTextarea2" label="Comments" onChange={onTextAreaChange}>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      </div>
    </>
  );
}

export default Details;
