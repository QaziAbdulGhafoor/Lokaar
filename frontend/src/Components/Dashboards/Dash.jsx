import React, { useEffect } from "react";
import api from "../../API/api";

const Dash = () => {
  useEffect(() => {
    async function getListings() {
      const response = await api.get("/dashboard");
      console.log(response);
    }
    getListings();
  }, []);

  return <div>dash</div>;
};

export default Dash;
