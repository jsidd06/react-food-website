import React from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
