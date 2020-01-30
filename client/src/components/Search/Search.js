import React, { useState, useEffect } from "react";
import "./Search.css";
import UserCard from "../styled/UserCard";
import getRequest from "../../utils/getRequest";

function Search() {
  const [allOffersCards, setAllOffersCards] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [allRequestsCards, setAllRequestsCards] = useState(null);
  const [toggleShare, setToggleShare] = useState(false);

  useEffect(() => {
    getRequest("/category-list").then(res => setAllCategories(res));

    getRequest("/search-offer-all").then(res => setAllOffersCards(res));

    getRequest("/search-request-all").then(res => setAllRequestsCards(res));
  }, []);

  if (!allCategories || !allOffersCards || !allRequestsCards)
    return <h1>Loading...</h1>;

  return (
    <React.Fragment>
      <div>
        <h2>People who have something to</h2>
        <button onClick={() => setToggleShare(!toggleShare)}>
          {toggleShare ? "Request" : "Offer"}
        </button>
      </div>

      {toggleShare ? (
        <>
          <h2>Choose a category:</h2>
          <select
            onChange={e => {
              setActiveCategory(Number(e.target.value));
            }}
          >
            {allCategories.map(category => {
              return (
                <option value={category.category_id} key={category.category_id}>
                  {category.category_name}
                </option>
              );
            })}
          </select>
          {!activeCategory
            ? allRequestsCards.map(member => {
                return (
                  <UserCard>
                    <img src={member.avatar_url} />
                    <div>
                      <p>{member.member_name}</p>
                      <p>{member.category_name}</p>
                      <p>{member.request_name}</p>
                      <p>{member.postcode}</p>
                    </div>
                  </UserCard>
                );
              })
            : allRequestsCards.map(member => {
                return member.category_id === activeCategory ? (
                  <UserCard>
                    <img src={member.avatar_url} />
                    <div>
                      <p>{member.member_name}</p>
                      <p>{member.category_name}</p>
                      <p>{member.request_name}</p>
                      <p>{member.postcode}</p>
                    </div>
                  </UserCard>
                ) : null;
              })}
        </>
      ) : (
        <>
          <select
            onChange={e => {
              setActiveCategory(Number(e.target.value));
            }}
          >
            {allCategories.map(category => {
              return (
                <option value={category.category_id} key={category.category_id}>
                  {category.category_name}
                </option>
              );
            })}
          </select>
          {!activeCategory
            ? allOffersCards.map(member => {
                return (
                  <UserCard>
                    <img src={member.avatar_url} />
                    <div>
                      <p>{member.member_name}</p>
                      <p>{member.category_name}</p>
                      <p>{member.offer_name}</p>
                      <p>{member.postcode}</p>
                    </div>
                  </UserCard>
                );
              })
            : allOffersCards.map(member => {
                return member.category_id === activeCategory ? (
                  <UserCard>
                    <img src={member.avatar_url} />
                    <div>
                      <p>{member.member_name}</p>
                      <p>{member.category_name}</p>
                      <p>{member.offer_name}</p>
                      <p>{member.postcode}</p>
                    </div>
                  </UserCard>
                ) : null;
              })}
        </>
      )}
    </React.Fragment>
  );
}

export default Search;
