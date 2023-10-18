import React, { useState, useEffect } from "react";

function Custom_Hook() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(
          "https://data.covid19india.org/v4/min/data.min.json"
        );

        if (res.ok) {
          const json = await res.json();
          const districtsData = Object.values(json?.MH?.districts);
          setData(districtsData);
          console.log(districtsData);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return [data, loading];
}

export default Custom_Hook;
