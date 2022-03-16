import React, { useState, useEffect } from "react";
import axios from "axios";
import Event from "../components/Event";

function Homescreen() {
  const [events, setevents] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get("/api/events/getallevents")).data;
      setevents(data);
      setloading(false);
    } catch (error) {
      seterror(true);
      console.log(error);
      setloading(false);
    }
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          events.map((event) => {
            return (
              <div className="col-md-9 mt-2">
                <Event event={event} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
