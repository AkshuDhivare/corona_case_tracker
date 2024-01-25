import React, { useState, useEffect } from "react";

function Custom_Hook(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(url);

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
