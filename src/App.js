import React from "react";
import Fetch_api from "./component/Fetch_api";

function App() {
  return (
    <>
      <h1 className="bg-primary text-white py-5 text-center ">
        Corona Virus Live Cases Tracker
      </h1>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 py-5">
            <Fetch_api />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
