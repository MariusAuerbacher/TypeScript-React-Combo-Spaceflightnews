// import React, { useEffect, useState } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
//import { useParams} from 'react-router-dom'
import { INew } from '../interfaces/INew'

interface IdComponentProps{
  new: INew
}


const IdComponent =(props: IdComponentProps) => {

  return (
    <CardDeck>
    <Card
      className="bg-dark text-white"
    >
      <Card.Img
        style={{ height: "10em" }}
        src={props.new.imageUrl}
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>{props.new.title}</Card.Title>
        <Card.Text> {props.new.summary}</Card.Text>
        <Card.Text>{props.new.newsSite} {props.new.url} </Card.Text>
        <Card.Text>{props.new.publishedAt.toString()}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  </CardDeck>
  )
}

export default IdComponent 

/*    id:          number;
    title:       string;
    url:         string;
    imageUrl:    string;
    newsSite:    NewsSite;
    summary:     string;
    publishedAt: Date;
    updatedAt:   Date;
    featured:    boolean;
    launches:    Launch[];
    events:      any[];
  
  
  .toString()
  
  
  
   const [news, setNews] = useState<INew[]>([])
  const params = useParams()

  const URL = "https://api.spaceflightnewsapi.net/v3/articles";


  useEffect(() => {
    getNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  const getNews = async () => {
    try {
      const response = await fetch(URL + params.companyName)
      if (response.ok) {
        const { data } = await response.json()
        setNews(data)
      } else {
        alert('Error fetching results')
  
      }
    } catch (error) {
      console.log(error)
    }
  }*/


  