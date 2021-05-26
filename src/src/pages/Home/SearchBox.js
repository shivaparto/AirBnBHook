import react, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    where: "",
    checkIn: "",
    checkOut: "",
    gestes: 0,
  };
  changeWhere = (e) => {
    this.setState({ where: e.target.value });
  };
  changecheckIn = (e) => {
    this.setState({ checkIn: e.target.value });
  };
  changecheckOut = (e) => {
    this.setState({ checkOut: e.target.value });
  };
  changeGestes = (e) => {
    this.setState({ gestes: e.target.value });
  };
  submitSearch = (e) => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.where}`);
  };
  render() {
    return (
      <div className="home-search-box col m4">
        <h1>Book unique place to stay and things to do.</h1>
        <form onSubmit={this.submitSearch} className="search-box-form">
          <div className="col m12">
            <div className="form-label">where</div>
            <div className="input-field" id="where">
              <input
                onChange={this.changeWhere}
                placeholder="Anywhere"
                value={this.state.where}
                type="text"
              />
            </div>
            <div className="row">
              <div className="col m6">
                <div className="form-label">check_In</div>
                <div className="input-field" id="check-in">
                  <input
                    onChange={this.changecheckIn}
                    value={this.state.checkIn}
                    placeholder="Anywhere"
                    type="date"
                  />
                </div>
              </div>
              <div className="col m6">
                <div className="form-label">check_out</div>
                <div className="input-field" id="check-out">
                  <input
                    onChange={this.changecheckOut}
                    value={this.state.checkOut}
                    placeholder="AnyTime"
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-label">Gests</div>
          <div className="input-field" id="gestes">
            <input
              onChange={this.changeGestes}
              placeholder="Number"
              value={this.state.gestes}
              type="number"
            />
          </div>
          <div className="col m12 submit-btn">
            <div className="input-field" id="submit-btn">
              <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
