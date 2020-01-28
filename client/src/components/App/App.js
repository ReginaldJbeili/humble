import React, { useState, useEffect } from "react";
import "./App.css";

import P from "../styled/P";
import Container from "../styled/Container";

import getRequest from "../../utils/getRequest";
import Profile from "../Profile/Profile";

function App() {
  const [page, setPage] = useState("profile");
  const [memberId, setMemberId] = useState(4);
  const [memberName, setMemberName] = useState(null);
  const [memberAvatar, setMemberAvatar] = useState(null);
  const [memberEmail, setMemberEmail] = useState(null);
  const [memberPostcode, setMemberPostcode] = useState(null);
  const [memberOffers, setMemberOffers] = useState([]);
  const [memberRequests, setMemberRequests] = useState(null);

  useEffect(() => {
    getRequest(`/get-member?member_id=${memberId}`).then(res => {
      console.log(res);
      setMemberName(res.member_name);
    });
  }, []);

  useEffect(() => {
    getRequest(`/get-member?member_id=${memberId}`).then(res => {
      setMemberName(res.member_name);
    });
  }, []);

  useEffect(() => {
    getRequest(`/get-member?member_id=${memberId}`).then(res => {
      setMemberAvatar(res.avatar_url);
    });
  }, []);

  useEffect(() => {
    getRequest(`/get-member?member_id=${memberId}`).then(res => {
      setMemberEmail(res.email);
    });
  }, []);

  useEffect(() => {
    getRequest(`/get-member?member_id=${memberId}`).then(res => {
      setMemberPostcode(res.postcode);
    });
  }, []);

  useEffect(() => {
    getRequest(`/get-profile?member_id=${memberId}`).then(res => {
      // console.log(res[2]);
      // console.log(res[1][0].offer_name);
      setMemberOffers(res[1]);
      setMemberRequests(res[2]);
    });
  }, []);

  return (
    <React.Fragment className="app">
      <Container>
        <h1>humble</h1>
        <P size="--space-lg">This is our app.</P>
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
  );
}

export default App;
