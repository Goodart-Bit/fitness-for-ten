import React from "react";
import './index.css';

const StyledTitle = ({title}) => {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <p>
      {firstWord} <span className="accented">{restWords}</span>
    </p>
  );
}

export default function AmenityDesc({title, qualities, img_path}) {
  return (
    <div className="amenity-card">
        <img src={img_path}/>
        <div className="qualities">
            <h2><StyledTitle title={title} /></h2>
            <ul>
                {qualities.map((quality, index) => (<li key={index}>&#8226; {quality}</li>))}
            </ul>
        </div>
        <button>Learn more...</button>
    </div>
  );
}
