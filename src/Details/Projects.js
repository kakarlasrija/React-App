import "./Projects.css";
import Card from "react-bootstrap/Card";
import p2 from "../StaticFiles/Images/P1.jpeg";

function Projects() {
  return (
    <>
      <div className="PrjBdy">
        <Card>
          <Card.Img variant="top" src={p2} />
          <Card.Body>
            <Card.Title>project 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button>Go somewhere</button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={p2} />
          <Card.Body>
            <Card.Title>project 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button>Go somewhere</button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={p2} />
          <Card.Body>
            <Card.Title>project 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button>Go somewhere</button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={p2} />
          <Card.Body>
            <Card.Title>project 1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button>Go somewhere</button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default Projects;
