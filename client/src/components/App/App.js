import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// import page-level components
import Landing from "../Landing/Landing";
import About from "../About/About";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import Navbar from "../Navbar/Navbar";

// import utils for API call
import getRequest from "../../utils/getRequest";

function App() {
  const [memberId, setMemberId] = useState(4); // hard code user
  const [memberName, setMemberName] = useState(null);
  const [memberAvatar, setMemberAvatar] = useState(null);
  const [memberEmail, setMemberEmail] = useState(null);
  const [memberPostcode, setMemberPostcode] = useState(null);
  const [memberOffers, setMemberOffers] = useState([]);
  const [memberRequests, setMemberRequests] = useState(null);

  useEffect(() => {
    getRequest(`/get-member?member_id=${memberId}`).then(res => {
      setMemberName(res.member_name);
      setMemberAvatar(res.avatar_url);
      setMemberEmail(res.email);
      setMemberPostcode(res.postcode);
    });
  }, []);

  useEffect(() => {
    getRequest(`/get-profile?member_id=${memberId}`).then(res => {
      setMemberOffers(res[1]);
      setMemberRequests(res[2]);
    });
  }, []);

  return (
    <main className="app">
      <Switch>
        <Route path="/" exact render={props => <Landing {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/search" render={props => <Search {...props} />} />
        <Route
          path="/profile"
          render={props => (
            <Profile
              {...props}
              memberName={memberName}
              memberAvatar={memberAvatar}
              memberEmail={memberEmail}
              memberPostcode={memberPostcode}
              memberOffers={memberOffers}
              memberRequests={memberRequests}
            />
          )}
        />
        <Route render={props => <Error />} />
      </Switch>

      <Navbar />
    </main>
  );
}

export default App;
