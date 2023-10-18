import React from "react";
import Fetch_api from "./component/Fetch_api";

function App() {
  return (
    <>
      <h1 className="bg-primary text-white py-2 text-center ">
        Corona Virus Live Cases Tracker
      </h1>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 py-5">
            <Fetch_api />
          </div>
        </div>
      </div>
      <h3 className="bg-dark text-white p-3 text-center ">
        &copy; {new Date().getFullYear()} Corono_Case_Tracker , Develop By
        Akshay Dhivare.
      </h3>
    </>
  );
}

export default App;
