import React, { useState, useEffect } from "react";
import axios from "axios";


function Bookingsscreen({ match }) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [event, setevent] = useState();
  useEffect(async() => {
    try {
      setloading(true);
      const data = (
        await axios.post("/api/events/geteventbyid", {eventid: match.params.eventid})).data;
        setevent(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  }, []);

  return (
    <div>
     
    <h2>Book this service:</h2> 
    <h2>Event ID = {match.params.eventid}</h2>               
    
    </div>
  );
}

export default Bookingsscreen;
