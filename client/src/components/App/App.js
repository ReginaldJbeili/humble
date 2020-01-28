import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// below is for react router
// import components
// import Landing from "../Landing";
// import About from "../About";
// import Search from "../Search";
// import Profile from "../Profile";
// import Error from "../Error";

import P from "../styled/P";
import Container from "../styled/Container";

import getRequest from "../../utils/getRequest";

import Profile from "../Profile/Profile";

function App() {
  const [page, setPage] = useState(null);
  const [memberId, setMemberId] = useState(4);
  const [memberName, setMemberName] = useState(null);
  const [memberAvatar, setMemberAvatar] = useState(null);
  const [memberEmail, setMemberEmail] = useState(null);
  const [memberPostcode, setMemberPostcode] = useState(null);
  const [memberOffers, setMemberOffers] = useState([]);
  const [memberRequests, setMemberRequests] = useState(null);

  const changePage = page => {
    setPage(page);
  };

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
    <React.Fragment className="app">
      <Container>
        <h1>humble</h1>
        <P size="--space-lg">This is our app.</P>
        <button onClick={() => changePage(null)}>Go to landing page</button>
        <button onClick={() => changePage("profile")}>
          Go to profile page
        </button>
        {page === "profile" ? (
          <Profile
            memberName={memberName}
            memberAvatar={memberAvatar}
            memberEmail={memberEmail}
            memberPostcode={memberPostcode}
            memberOffers={memberOffers}
            memberRequests={memberRequests}
          />
        ) : null}
      </Container>
    </React.Fragment>

    // below is for react router
    // <main>
    //   <Switch>
    //     <Route path="/" component={Landing} exact />
    //     <Route path="/about" component={About} />
    //     <Route path="/search" component={Search} />
    //     <Route path="/profile" component={Profile} />
    //     <Route component={Error} />
    //   </Switch>
    // </main>
  );
}

export default App;
