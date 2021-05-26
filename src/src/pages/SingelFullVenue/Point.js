import React from "react";
import "./SingelFullVenue.css";

function Point(props) {
  const desobj = props.pointDesc.find((point) => point.pointTitle === props.point);
  console.log(desobj);

  return (
    <div>
      <div className="point-title">{props.point}</div>
      <div className="point-desc">{desobj.text}</div>
    </div>
  );
}
export default Point;
