import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? (
        <Form isRegistered={false} />
      ) : (
        <Form isRegistered={true} />
      )}
    </div>
  );
}

export default App;
