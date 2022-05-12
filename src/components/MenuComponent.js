import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const RenderDishes = ({dish, hamso}) => {
  return (
    <Card 
    // onClick={()=>hamso(dish)}
    >
      <CardImg src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default function Menu(props) {
  const menu = props.dishes.map((element) => {
    return (
      <div key={element.id} className="col-12 col-md-4 col-sm-6">
        <RenderDishes dish={element} hamso={props.setState}  />
      </div>
    ); 
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
}
