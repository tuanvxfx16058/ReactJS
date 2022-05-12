import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

//Presentational component
    function RenderPhongban({ phongban }) {
      return (
        <Card className="m-2">
          <CardBody>
            <CardTitle>{phongban.name}</CardTitle>
            <CardText>Số lượng nhân viên:{phongban.numberOfStaff}</CardText>
          </CardBody>
        </Card>
      );
    }


//Container component
export default function Phongban(props) {
  const phongban = props.phongban.map((value) => {
    return (
      <div key={value.id} className="col-12 col-sm-6 col-md-4">
        <RenderPhongban phongban={value} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{phongban}</div>
    </div>
  );
}


