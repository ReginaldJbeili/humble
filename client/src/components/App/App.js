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

// import styled-components
import Container from "../styled/Container";

// import utils for API call
import getRequest from "../../utils/getRequest";

function App() {
  const [memberId, setMemberId] = useState(4);
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
      <Container>
        <h1>humble</h1>
        <P size="--space-lg">This is our app.</P>
      </Container>

      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/profile">
          <Profile
            memberName={memberName}
            memberAvatar={memberAvatar}
            memberEmail={memberEmail}
            memberPostcode={memberPostcode}
            memberOffers={memberOffers}
            memberRequests={memberRequests}
          />
        </Route>
        <Route component={Error} />
      </Switch>

      <Navbar />
    </main>
  );
}

export default App;
