import React from "react";

function Jumbotron() {
  return (
    <>
      <div className="text-dark p-1 mt-4 mb-4 bg-secondary bg-opacity-25 rounded-3">
        <div className="py-5 container">
          <h1>A Warm Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn btn-primary">Click to Action!</button>
        </div>
      </div>
    </>
  );
}
export default Jumbotron;
