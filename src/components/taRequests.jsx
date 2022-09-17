import React, { useEffect, useState } from "react";
import Footer from "./footer";
import axios from "axios";
import TaRequest from "./taRequest";

function TaRequests() {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    axios
      .get("https://bsite.net/RezaKlhor/Ta/GetAllTaRequests")
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        if (error.response.status == 404) setRequests(null);
      });
  }, []);
  return (
    <div>
        <div>
          {requests ? (
            requests.map((unit) => <TaRequest request={unit} />)
          ) : (
            <div className="didntFind">درخواستی یافت نشد</div>
          )}
        </div>
      <Footer />
    </div>
  );
}

export default TaRequests;
