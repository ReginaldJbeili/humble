import React from "react";
import "./Profile.css";

function Profile({
  memberName,
  memberAvatar,
  memberEmail,
  memberPostcode,
  memberOffers,
  memberRequests
}) {
  return (
    <React.Fragment>
      {memberName ? <p>{memberName}'s Profile</p> : null}
      {memberAvatar ? <img src={memberAvatar} /> : null}
      {memberEmail ? <p>Contact email: {memberEmail}.</p> : null}
      {memberPostcode ? <p>Location: {memberPostcode}</p> : null}
      <p>My offers:</p>
      {memberOffers ? (
        <ul>
          {memberOffers.map(offer => (
            <li key={offer}>{offer}</li>
          ))}
        </ul>
      ) : (
        <p>You don't have any offers yet!</p>
      )}
      <p>My requests:</p>
      {memberRequests ? (
        <ul>
          {memberRequests.map(request => (
            <li key={request}>{request}</li>
          ))}
        </ul>
      ) : (
        <p>You don't have any requests yet!</p>
      )}
    </React.Fragment>
  );
}

export default Profile;
