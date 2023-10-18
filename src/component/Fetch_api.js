import React, { useEffect, useState } from "react";
import Custom_Hook from "./Custom_Hook";

function FetchApi() {
  const [data, loading] = Custom_Hook(
    "https://data.covid19india.org/v4/min/data.min.json"
  );
  const heading = [
    "Id",
    "confirmed",
    "deceased",
    "other",
    "recovered",
    "tested",
    "vaccinated",
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-striped border-dark  border text-center">
            <thead>
              <tr>
                {heading.map((head) => {
                  return <th scope="col">{head.toUpperCase()}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7">Loading data...</td>
                  ``````````````````````````````````````````````````
                </tr>
              ) : (
                data.map((element, index) => {
                  const {
                    confirmed,
                    deceased,
                    other,
                    recovered,
                    tested,
                    vaccinated1,
                  } = element?.total;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{confirmed}</td>
                      <td>{deceased}</td>
                      <td>{other}</td>
                      <td>{recovered}</td>
                      <td>{tested}</td>
                      <td>{vaccinated1}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FetchApi;
