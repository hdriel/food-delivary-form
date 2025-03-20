import React from "react";
import "./App.css";
import FoodDeliveryForm from "./FoodDeliveryForm";
import TypicalForm from "./TypicalForm";

function App() {
  return (
    <>
      <div className="container">
        <div className="mx-5 d-flex gap-5">
          <FoodDeliveryForm />
          {/*<TypicalForm />*/}
        </div>
      </div>
    </>
  );
}

export default App;
