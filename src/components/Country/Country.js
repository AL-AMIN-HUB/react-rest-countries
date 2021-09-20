import React from "react";
import "./Country.css";

const Country = (props) => {
  // destructuring
  const { name, flag, capital, population, region } = props.country;
  // console.log(props.country);
  return (
    <div className="country">
      <h4>Country: {name} </h4>
      <img style={{ width: "350px", height: "200px" }} src={flag} alt="" />
      <p><small>Region: {region}</small> </p>
      <p>Capital: {capital} </p>
      <p>Population: {population} </p>
    </div>
  );
};

export default Country;
