import React, { useEffect, useState } from "react";
import axios from "axios";
import Nwes from "../../../../pages/News/Nwes";

export default function Jewllarynews() {
  const [responsedata, setResponsedata] = useState([]);

  useEffect(() => {
    axios
      .get(` http://localhost:3000/newsJewllary`)
      .then((response) => {
        setResponsedata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  return (
    <div>
      <Nwes responsedata={responsedata} />
    </div>
  );
}
