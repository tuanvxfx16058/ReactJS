import React from "react";
import { Card, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const RenderNhanvien = ({staff}) => {
    return (
        <Card>
          <Link to={`/nhanvien/${staff.id}`}>
            <CardImg src={staff.image} alt={staff.name} />
          </Link>
          <CardBody>
            <CardText>{staff.name}</CardText>
          </CardBody>
        </Card>
    );
  };


const Nhanvien = (props) => {
  const nhanvien = props.staffs.map((value) => {
    return (
      <div className="col-12 col-sm-4 col-md-2">
        <RenderNhanvien staff={value} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{nhanvien}</div>
    </div>
  );
};

export default Nhanvien;