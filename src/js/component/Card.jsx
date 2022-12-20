//child/dummy component
import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.cImg}
          className="card-img-top"
          alt={props.imgAlt}
        />
        <div className="card-body justify-content-end">
          <h5 className="card-title">{props.cTitle}</h5>
          <p className="card-text ">
            {props.cDiscript}
          </p>
          <div className="text-center">
            <a href="#" className="btn btn-primary">
              {props.btnText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
