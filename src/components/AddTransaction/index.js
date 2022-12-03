import "./index.css";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// option title category amount date

function AddTransaction() {
  let navigate = useNavigate();
  const toAdd = () => {
    let path = "add";
    navigate(path);
  };

  //   let [option, title, category, amount, date] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">Money Manager</h1>
        </div>
        <div className="transaction-details">
          <form
            className="contact-form-container"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h1 className="transaction-header">Add Transaction</h1>
            <label className="input-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="TITLE"
            />
            <label className="input-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              placeholder="AMOUNT"
            />
            <label className="input-label" htmlFor="select">
              TYPE
            </label>
            <select id="select" className="input">
              <option key={"1"} value={"1"}>Expenses</option>
              <option key={"2"} value={"2"}>Income</option>
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
      <button className="btn-add" onClick={toAdd}>
        <FaPlus />
      </button>
    </div>
  );
}

export default AddTransaction;
