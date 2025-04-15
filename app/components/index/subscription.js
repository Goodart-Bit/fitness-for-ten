import React from "react";
import "./index.css";

export default function SubscriptionPrev({
  name,
  price,
  path,
  link,
  guest = false,
}) {
  return (
    <div
      style={{ backgroundImage: `url(${path})`, backgroundSize: "cover" }}
      className="card"
    >
      {guest && <p>After hours drop in</p>}
      <h2>{name}</h2>
      <div>
        <p>Only</p>
        <span className="price">${price}</span>
        {guest ? <p>per entry</p> : <p>bi-weekly</p>}
        {guest ? (
          <a className="btn" href={link} target="_blank">
            PURCHASE NOW!
          </a>
        ) : (
          <a className="btn" href={link} target="_blank">
            JOIN NOW!
          </a>
        )}
      </div>
    </div>
  );
}
