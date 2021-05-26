import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./City.css";

class City extends Component {
  render() {
    // console.log(this.props.city);
    const { cityName, price, image, id } = this.props.city;
    return (
      <div className="city col m12">
        <Link to={`/city/${cityName}`}>
          <div className="image">
            <img src={image} />
          </div>
          <div className="city-name">{cityName}</div>
          <div className="price"> $ {price} / avrage night</div>
        </Link>
      </div>
    );
  }
}
export default City;
