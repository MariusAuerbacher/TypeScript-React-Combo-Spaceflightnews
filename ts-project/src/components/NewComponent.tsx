import React from "react";
import INew from "../interfaces/INew";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import IdComponent from "./IdComponent";

interface NewComponentProps {
  new: INew;
}

const NewComponent = (props: NewComponentProps) => {
  return (
    <Col className="mb-4" key={props.new.id}>
      <Link to={`/details/${props.new.id}`} >
      <Card
        className="bg-dark text-white"
        //onClick={() => navigate("/details/:id")}
      >
        <Card.Img
          style={{ height: "15em" }}
          src={props.new.imageUrl}
          alt="Card image"
        />
          <Card.Title>{props.new.title}</Card.Title>
          <Card.Text>by {props.new.newsSite} at {new Date (props.new.publishedAt).toLocaleTimeString()}</Card.Text>
        {/*<IdComponent new={props.new}/>*/}
      </Card>
      </Link>
    </Col>
  );
};

export default NewComponent;
