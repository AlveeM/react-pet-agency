import React from "react";
import "./App.css";
import PetContainer from "./components/PetContainer/PetContainer";

function App() {
  return (
    <main className="app">
      <h1 className="app-heading">Pet Adoption Agency</h1>
      <PetContainer />
    </main>
  );
}

export default App;
