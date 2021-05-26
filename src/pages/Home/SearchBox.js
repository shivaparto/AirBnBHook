import react, { useState } from "react";
import "./SearchBox.css";
import useControlledInput from "../../../src/custom-Hooks/useControlledInput";
function SearchBox(props) {
  const where = useControlledInput("");
  const checkIn = useControlledInput("");
  const checkOut = useControlledInput("");
  const gestes = useControlledInput(1);

  //const [where, changeWhere] = useState("");
  //const [checkIn, changecheckIn] = useState("");
  //const [checkOut, changecheckOut] = useState("");
  //const [gestes, changeGestes] = useState(1);

  const submitSearch = (e) => {
    e.preventDefault();
    props.history.push(`/search/${where.value}`);
  };

  return (
    <div className="home-search-box col m4">
      <h1>Book unique place to stay and things to do.</h1>
      <form onSubmit={submitSearch} className="search-box-form">
        <div className="col m12">
          <div className="form-label">where</div>
          <div className="input-field" id="where">
            <input placeholder="Anywhere" {...where} type="text" />
          </div>
          <div className="row">
            <div className="col m6">
              <div className="form-label">check_In</div>
              <div className="input-field" id="check-in">
                <input {...checkIn} placeholder="Anywhere" type="date" />
              </div>
            </div>
            <div className="col m6">
              <div className="form-label">check_out</div>
              <div className="input-field" id="check-out">
                <input {...checkOut} placeholder="AnyTime" type="date" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-label">Gests</div>
        <div className="input-field" id="gestes">
          <input placeholder="Number" {...gestes} type="number" />
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

export default SearchBox;
