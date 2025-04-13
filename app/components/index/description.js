import React from "react";
import "./index.css";

const StyledTitle = ({ title }) => {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <p>
      {firstWord} <span className="accented">{restWords}</span>
    </p>
  );
};

export default function AmenityDesc({
  title,
  qualities,
  img_paths,
  magazine = false,
}) {
  return (
    <div className={`amenity-card ${magazine && "extended"}`}>
      <div>
        {img_paths.map((path, idx) => {
          return <img key={`amenity_${idx}`} src={path} loading="lazy"/>;
        })}
      </div>
      <div className="qualities">
        <h2>
          <StyledTitle title={title} />
        </h2>
        {magazine ?  <QualitiesExtend list={qualities}/> : <Qualities list={qualities}/>}
      </div>
      {!magazine && <button>Learn more...</button>}
    </div>
  );
}

export function Qualities({ list }) {
  return (
    <ul>
      <div>
        {list.map((quality, index) => (
          <li key={index}>&#8226; {quality}</li>
        ))}
      </div>
    </ul>
  );
}

export function QualitiesExtend({ list }) {
  return (
    <ul>
        {list.map((quality, index) => (
          <li key={index}>
            <h3>&#8226; {quality.title}</h3>
            <p>{quality.description}</p>
          </li>
        ))}
    </ul>
  );
}


