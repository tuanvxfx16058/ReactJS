import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const RenderDetaidish = ({dish}) => {
  return (
    <div className="col-12 col-md-2 col-sm-6">
      <Card>
        <CardImg src={dish.image}></CardImg>
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

const RenderDetaiComment = ({comments}) => {
  const comment = comments.map((element) => {
    return (
      <div>
        <b>{element.author}</b>
        <br />
        {element.comment}
        <hr />
      </div>
    );
  });
  return <div className="col-12 col-md-10 col-sm-6">{comment}</div>;
};

export default function DetailDish(props) {
  if (props.dish != null) {
   
    console.log(props.comments)
    

    return (
      <div className="container">

        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          {/* <div className="col-12">
            <h3>{props.dish.name}</h3>
          </div> */}
          <hr />
        </div>

        <div className="row">
          <RenderDetaidish dish={props.dish}/>
          <RenderDetaiComment comments={props.comments} />
        </div>
      </div>
    );
  } else return <div></div>;
}
