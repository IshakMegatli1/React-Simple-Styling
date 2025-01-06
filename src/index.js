import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
const currentTime = new Date().getHours();
let salutations;
//js object
const customText = {
  color: "",
};

if (currentTime < 12) {
  salutations = "Good Morning";
  customText.color = "red";
} else if (currentTime > 12 && currentTime < 18) {
  salutations = "Good Afternoon";
  customText.color = "green";
} else {
  salutations = "Good Evening";
  customText.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customText}>
    {salutations}
  </h1>,
  document.getElementById("root")
);
