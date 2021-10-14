import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(aNote => (
        <Note 
          key={aNote.key} 
          title={aNote.title}
          content={aNote.content}
        />
        )
       )
      }
      <Footer />
    </div>
  );
}

export default App;
