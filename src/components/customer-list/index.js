import React, { useStates } from "react";
import "./index.css";

function CustomerList() {
  const [custArray, setCustArray] = useStates([]);

  function handleSubmit(e) {
    let [name, value] = e.target;
    setCustArray([...custArray, value]);
  }

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="text"
          className="large"
          placeholder="Name"
          data-testid="app-input"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="ml-30"
          data-testid="submit-button"
        >
          Add Customer
        </button>
      </section>
      <ul className="styled mt-50" data-testid="customer-list">
        {custArray.map(x)(
          <li
            className="slide-up-fade-in"
            data-testid="list-item1"
            key="list-item1"
          >
            {x}
          </li>
        )}
      </ul>
    </div>
  );
}

export default CustomerList;
