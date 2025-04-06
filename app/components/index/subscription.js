import React from "react";
import "./index.css";

export default function SubscriptionPrev({ name, price, path, link }) {
  return (
    <div
      style={{ backgroundImage: `url(${path})`, backgroundSize: "cover" }}
      className="card"
    >
      <h2>{name}</h2>
      <div>
        <p>Only</p>
        <span className="price">${price}</span>
        <p>bi-weekly</p>
        <a className="btn" href={link} target="_blank">
          JOIN NOW!
        </a>
      </div>
    </div>
  );
}
