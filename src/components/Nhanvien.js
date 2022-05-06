import React from "react";
import { STAFFS } from "../staffs";
import { Card, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const RenderNhanvien = (props) => {
  const menu = props.staffs.map((value) => {
    return (
      <div className="col-12 col-sm-4 col-md-2">
        <Card>
          <Link to={`/nhanvien/${value.id}`}>
            <CardImg src={value.image} alt={value.name} />
          </Link>
          <CardBody>
            <CardText>{value.name}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
  return <React.Fragment>{menu}</React.Fragment>;
};

export default function Nhanvien() {
  return (
    <div className="container">
      <div className="row">
        <RenderNhanvien staffs={STAFFS} />
      </div>
    </div>
  );
}
