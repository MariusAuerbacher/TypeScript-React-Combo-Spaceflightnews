import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import NewComponent from "./NewComponent";
import { INew } from "../interfaces/INew";


const FetchComponent = () => {
  const URL = "https://api.spaceflightnewsapi.net/v3/articles";

  const [news, setNews] = useState<INew[]>([]);

  const fetchNews = async () => {
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let newsFromApi = await response.json();
        console.log(newsFromApi);
        setNews(newsFromApi);
      } else {
        console.log("Something went wrong in the fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2>Spaceflight news from around the world</h2>
        </Col>
      </Row>
      <Row>
        {news.map((n) => (
          <Col xs={12} md={2} lg={2} className="text-dark" key={n.id}>
            <NewComponent new={n}/>
            
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FetchComponent;
