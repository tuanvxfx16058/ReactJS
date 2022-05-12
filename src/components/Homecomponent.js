import React from 'react'
import { Card,  CardBody,  CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'


function RenderItem({item}){
  return(
    <div className='col-12 col-sm-6 col-md-4'>
        <Card>
          <CardImg src={item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
             {item.price ? <CardSubtitle>Price: {item.price}$</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            
          </CardBody>
           
        
        </Card>
    </div>
  )
}

export default function Home(props) {
  
  return (
    <div className='container'>
      <div className='row'>
        <RenderItem item={props.dish}/>
        <RenderItem item={props.promotion}/>
        <RenderItem item={props.leader}/>

      </div>
    </div>
  )
}
