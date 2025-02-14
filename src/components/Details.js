import "../styles/Details.css"
import { Button, Nav } from "react-bootstrap";

function Details() {
  return (  
    <div className="details-descript">
      <img
        alt="cabs in the city"
        src={"assets/cabs.jpg"}
      />
      <div>
        <h3>Title</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button variant="primary">
          <Nav.Link href="/">Go back</Nav.Link>
        </Button>
      </div>
    </div>
  );
}

export default Details;