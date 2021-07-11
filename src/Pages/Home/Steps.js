import React from "react";

function Steps() {
  return (
    <div className="w-100 d-flex flex-column">
      <hr className="w-100 mt-5" />
      <h2 className="ml-4">Steps</h2>
      <hr className="w-100" />
      <div className="d-flex">
        <div
          className="w-50 m-3 p-3"
          style={{
            background: "lightblue",
            borderRadius: 20,
            boxShadow: `0 0 15px lightgrey,0 0 7px darkgrey`,
          }}
        >
          <h3
            className="p-3"
            style={{
              background: "darkgrey",
              borderRadius: 25,
              width: "fit-content",
            }}
          >
            For Investor
          </h3>
          <ol className="mt-4" style={{ fontSize: 20 }}>
            {steps.investor.map((el) => (
              <li className="m-3">{el}</li>
            ))}
          </ol>
          <span className="d-flex m-3" style={{ fontSize: 20 }}>
            <div>✯</div>
            <span className="ml-2">
              We have weekly, monthly and overall leaderboards, which show our
              highest contributing investors.
            </span>
          </span>
        </div>
        <div
          className="w-50 m-3 p-3"
          style={{
            background: "lightgreen",
            borderRadius: 20,
            boxShadow: `0 0 15px lightgrey,0 0 7px darkgrey`,
          }}
        >
          <h3
            className="p-3"
            style={{
              background: "pink",
              borderRadius: 25,
              width: "fit-content",
            }}
          >
            For Borrower
          </h3>
          <ol className="mt-4" style={{ fontSize: 20 }}>
            {steps.borrower.map((el) => (
              <li className="m-3">{el}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
const steps = {
  investor: [
    "Login/Register into the site using traditional email - password method, or OAuth (preferred).",
    "Based on your preferences, we suggest you a list of borrowers",
    "You can plan to invest in a specific amount, or recurringly deposit.",
    "For any queries, you can directly comment on the post, and the borrower.",
    "Borrower returns the amount in the agreed time, via the site.",
    "Chat Feature is provided to directly contact the borrower.",
  ],
  borrower: [
    "Login/Register into the site using traditional email - password method, or OAuth (preferred).",
    "You get an option to create a post by using the Create Post",
    "Your Profile section show your details, and the posts created by you.",
    "Under every post you have the amount invested so far, and time remaining.",
    "Chat Feature is provided to directly respond to the queries of the investor.",
  ],
};
export default Steps;
