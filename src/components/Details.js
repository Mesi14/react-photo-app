import { useParams } from "react-router";
import "../styles/Details.css";
import { Button, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function Details() {
  const parameters = useParams();
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:3001/photos/${parameters.imgId}`
        );
        setPhoto(resp.data);
      } catch (error) {
        console.log("this error is from single photo page", error);
      }
    };

    window.setTimeout(() => fetchData(), 1000);
  }, []);
  console.log(photo);

  return (
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
  );
}

export default Details;
