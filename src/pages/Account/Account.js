import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useSelector, shallowEqual } from "react-redux";
import "./Account.css";
import moment from "moment";
import AccountSideBar from "./AccountSideBar";
import Bookings from "./Bookings";
import ChangePassword from "./ChangePassword";

function Account(props) {
  const token = useSelector((state) => state.auth.token, shallowEqual);
  console.log(token);

  const [pastBookings, setPastBookings] = useState([]);
  const [upcomingBookings, setupcomingBookings] = useState([]);
  useEffect(() => {
    const accountUrl = `${window.apiHost}/users/getBookings`;
    const data = {
      token: token,
    };
    const fetchAccountData = async () => {
      const resp = await axios.post(accountUrl, data);
      console.log(data);
      let pastBookings = [];
      let upcomingBookings = [];
      resp.data.forEach((booking) => {
        const today = moment();
        const checkOutDate = moment(booking.checkOutDate);
        const diffDays = checkOutDate.diff(today, "days");
        if (diffDays < 0) {
          pastBookings.push(booking);
        } else {
          upcomingBookings.push(booking);
        }
      });
      setPastBookings(pastBookings);
      setupcomingBookings(upcomingBookings);
    };
    fetchAccountData();
  }, []);

  // console.log(pastBookings);
  //  console.log(upcomingBookings);
  return (
    <div className="account container-fluid">
      <AccountSideBar />
      <div className="row">
        <div className="col s8 offset-s3">
          <Route exact path="/account" render={() => <h1>Choose an option on the left!</h1>} />
          <Route exact path="/account/reservations/confirmed">
            <Bookings type="upcoming" Bookings={upcomingBookings} token={token} />
          </Route>
          <Route exact path="/account/reservations/past">
            <Bookings type="past" Bookings={pastBookings} />
          </Route>
          <Route exact path="/account/change-pass" component={ChangePassword} />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
//export default connect(mapStateToProps)(Account);
export default Account;
