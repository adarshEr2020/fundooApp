import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";

export default function NotFound() {
 const history = useHistory();
  const backToLogin = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      <div style={{ fontSize: "30px", textAlign: "center", color: "gray" }}>
        <h2>
          Error...
          <br />
          Page Note Found
        </h2>
        <Button onClick={backToLogin}>Back</Button>
      </div>
    </div>
  );
}
