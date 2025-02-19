import { useParams } from "react-router";
import "../styles/Details.css";
import { Button, Nav, Row, Col, Form, FloatingLabel, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";

function Details() {
  const parameters = useParams();
  const [photo, setPhoto] = useState([]);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({firstName: "", user: "", lastName: "", singleComment: "", agree: false});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`http://localhost:3001/photos/${parameters.imgId}`);
        setPhoto(resp.data);
      } catch (error) {
        console.log("this error is from single photo page", error);
      }
    };
    fetchData();
  }, [parameters.imgId]);
  
  const handleChange = (ev) => {
    setFormData({...formData, [ev.target.name]: ev.target.value})
  }

  const handleCheckState = (ev) => {
    setFormData({...formData, [ev.target.name]: ev.target.checked})
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      setValidated(false);
      return;
    }
    await makeComment(formData.user, formData.singleComment);
    setValidated(true);
    setFormData({firstName: "", user: "", lastName: "", singleComment: "", agree: false})
    setValidated(false);
  };

  const makeComment = async (user, singleComment) => {
    try {
      const currPhoto = { ...photo };
      currPhoto.comments.push(`@${user}: ${singleComment}`);
      setPhoto(currPhoto);
      await axios.put(`http://localhost:3001/photos/${parameters.imgId}`, photo)
    } catch (error) {
      console.log("this is the error from making a comment", error);
    }
  }
  console.log("agree", formData.agree)
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
      <div className="comments">
        <ListGroup>
          <ListGroup.Item><h3>All comments</h3></ListGroup.Item>
          {(photo.comments?.length > 0) ? photo.comments.map((comment, index) => <ListGroup.Item key={index}>{comment}</ListGroup.Item>) : <ListGroup.Item>No comments yet!</ListGroup.Item>} 
        </ListGroup>
      </div>
      <div className="add-comment mt-5">
        <h1>Please leave a comment</h1>
        <Form validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
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
                  onChange={handleChange}
                  value={formData.user}
                  name="user"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                onChange={handleChange}
                value={formData.singleComment}
                name="singleComment"
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
                name="agree"
                checked={formData.agree}
                onChange={handleCheckState}
              />
            </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      </div>
    </>
  );
}

export default Details;
