import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export default function DetailDish(props) {
    if (props.dish != null) {
    //
    

    const RenderDetaidish = () => {
      return (
        <div className="col-12 col-md-2 col-sm-6">
        <Card>
          <CardImg src={props.dish.image}></CardImg>
          <CardImgOverlay>
            <CardTitle>{props.dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
        </div>
      );
    };

    //
const RenderDetaiComment=()=>{
    const comment=props.dish.comments.map((element)=>{
        return(
            <div>
                <b>{element.author}</b><br/>
                {element.comment}<hr/>
            </div>
        )
    })
    return(
        <div className="col-12 col-md-10 col-sm-6">
            {comment}
        </div>  
    )
}


    return (
      <div className="container">
        <div className="row">
          <RenderDetaidish />
          <RenderDetaiComment/>
        </div>
      </div>
    );
  } else return <div></div>;
}
