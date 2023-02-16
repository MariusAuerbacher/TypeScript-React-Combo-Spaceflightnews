import React from "react";
import { INew } from "../interfaces/INew";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import IdComponent from "./IdComponent";

interface NewComponentProps {
  new: INew;
}


const NewComponent = (props: NewComponentProps) => {
  const navigate = useNavigate()
return(
  <Container>
    <Row>
      <Col>
    <Card
      className="bg-dark text-white"
      onClick={() => navigate("/details/:id")}

    >
      <Card.Img
        style={{ height: "10em" }}
        src={props.new.imageUrl}
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>{props.new.title}</Card.Title>
        <Card.Text>{props.new.newsSite}</Card.Text>
      </Card.ImgOverlay>
      {/*<IdComponent new={props.new}/>*/}
    </Card>
    </Col>
    </Row>
  </Container>
)
};

export default NewComponent;
