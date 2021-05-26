import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Venue.css";
class Venue extends Component {
  render() {
    // console.log(this.props.venue);
    const { id, title, location, pricePerNight, imageUrl, rating } = this.props.venue;

    return (
      // <div>123</div>
      <div className="venue col s12">
        <Link link to={`/venue/${id}`}>
          <div className="image">
            <img src={imageUrl} />
          </div>
          <div className="location-stars">
            <span className="location">{location}</span>
            <span className="rating right">
              <i className="material-icons">star</i>
              {rating}
            </span>
          </div>
          <div className="title">${title}</div>
          <div className="price-per-night">${pricePerNight}/night</div>
        </Link>
      </div>
    );
  }
}
export default Venue;
