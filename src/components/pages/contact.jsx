import React from "react";
import "../css/contact.css";

function contact() {
  return (
    <div className="contact animate__animated animate__bounceInDown">
      <h1>Khaleld Hassan</h1>
      <p>
        Email:{" "}
        <a href="mailto:hassankh@oregonstate.edu" type="email">
          KhHassan123@proton.me
        </a>
      </p>
      <p>Phone: (804) 920-4105</p>
    </div>
  );
}

export default contact;
