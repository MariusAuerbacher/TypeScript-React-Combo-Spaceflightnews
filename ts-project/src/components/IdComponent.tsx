import  { useEffect, useState} from 'react'
import { Button, Col, Container, Row} from 'react-bootstrap'
import { useParams} from 'react-router-dom'
import INew from '../interfaces/INew'


const IdComponent =() => {

  const params = useParams()
  const id = params.id
  const [news, setNews] = useState<INew | null>(null)


  useEffect(() => {
    getNews()
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []) 
   
   const getNews = async () => {
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles/' + params.id)
      if (response.ok) {
       const data  = await response.json()
       setNews(data)
       console.log(id)
      } else {
        alert('Error fetching results')
   
      }
    } catch (error) {
      console.log(error)
    }
   }

  return (
    
   <Container className="mt-4 text-center">
    <Row>
      <Col>
      {
      news ? (
      <>
    <img src={news.imageUrl} alt="a pic" style={{height: '25em', width: 'auto'}}/>
    <h2>{news.title}</h2>
    <p>{news.summary}</p>
    <p>{news.newsSite}</p>
    <Button variant="success" onClick={() => window.location.assign(news.url)}>Read the full article</Button>
</>



      ) : <></> }
     
      </Col>
    </Row>
   </Container>
  )
}

export default IdComponent 

