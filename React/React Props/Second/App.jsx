import React from "react";
import Contacts from "../contacts.js";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={Contacts[0].name}
        imgName={Contacts[0].imgURL}
        tel={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        imgName={Contacts[1].imgURL}
        tel={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        imgName={Contacts[2].imgURL}
        tel={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;
