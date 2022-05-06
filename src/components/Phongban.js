import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { DEPARTMENTS } from "../staffs";
import { STAFFS } from "../staffs";

//Presentational component
    function RenderPhongban({ cacphongban }) {
  const phongban = cacphongban.map((value) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
      <Card className="m-2">
        <CardBody>
          <CardTitle> Phòng {value[0].department.name}</CardTitle>
          <CardText>Số lượng nhân viên:{value.length}</CardText>
        </CardBody>
      </Card>
      </div>
    );
  });
  return <React.Fragment> {phongban}</React.Fragment>;
}


//Container component
export default function Phongban() {
  const Sale = STAFFS.filter((value) => value.department === DEPARTMENTS[0]);
  const HR = STAFFS.filter((value) => value.department === DEPARTMENTS[1]);
  const Marketing = STAFFS.filter((value) => value.department === DEPARTMENTS[2]);
  const IT = STAFFS.filter((value) => value.department === DEPARTMENTS[3]);
  const Finance = STAFFS.filter((value) => value.department === DEPARTMENTS[4]);
  const cacphongban=[Sale, HR,Marketing ,IT, Finance]
  return (
        <div className="container">
            <div className="row">
                <RenderPhongban cacphongban={cacphongban}/>
            </div>
        </div>
  );
}


