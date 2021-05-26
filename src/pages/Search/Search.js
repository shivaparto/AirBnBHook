import React, { useState, useEffect } from "react";
import "./Search.css";
import Spinner from "../../utility/Spinner/Spiner";
import "../Home/Home.css";

import axios from "axios";
import Cities from "../../utility/City/Cities";
import promise from "redux-promise";
import Activities from "../../utility/Activity/Activities";
import Venues from "../../utility/Venue/Venues";

function Search(props) {
  const [activities, setActivities] = useState([]);
  const [cities, setCities] = useState([]);
  const [venues, setVenues] = useState([]);
  const [apiResponse, setResponse] = useState(false);

  useEffect(() => {
    const fetchSearchData = async () => {
      const searchTerm = props.match.params.searchTerm;
      const url = `${window.apiHost}/search/${searchTerm}`;
      const resp = await axios.get(url);
      setActivities(resp.data.activities);
      setCities(resp.data.cities);
      setVenues(resp.data.venues);
      setResponse(true);
    };
    fetchSearchData();
  }, []);

  if (!apiResponse) {
    return <Spinner />;
  }
  return (
    <div className="container-fluid lower-fold">
      <div className="row">
        <div className="col s12">
          <Cities cities={cities} header="Cities Matching your search" />
        </div>
        <div className="col s12">
          <Activities activities={activities} header="Activities Matching your search" />
        </div>
        <div className="col s12">
          <Venues venues={venues} header="Venues Matching your search" />
        </div>
      </div>
    </div>
  );
}

export default Search;
