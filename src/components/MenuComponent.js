import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";


const RenderDishes = ({dish}) => {
  return (
   
    <Card>
       <Link to={`/menu/${dish.id}`}>
      <CardImg src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Link>
    </Card>
    
  );
};

export default function Menu(props) {
  const menu = props.dishes.map((element) => {
    return (
      <div key={element.id} className="col-12 col-md-4 col-sm-6">
        <RenderDishes dish={element}  />
      </div>
    ); 
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12"><h3>Menu</h3></div>
        <hr/>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
}
