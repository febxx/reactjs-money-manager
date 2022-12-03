import "./index.css";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MoneyManager() {
  let navigate = useNavigate();
  const toAdd = () => {
    let path = 'add'
    navigate(path);
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">Money Manager</h1>
        </div>
        <div className="money-details-container">
          <div className="balance-container">
            <div className="details-content">
              <p className="details-text">Balance</p>
              <p className="details-money" testid="balanceAmount">
                400.000
              </p>
            </div>
          </div>
          <div className="income-container">
            <div className="details-content">
              <p className="details-text">Income</p>
              <p className="details-money" testid="incomeAmount">
                400.000
              </p>
            </div>
          </div>
          <div className="expenses-container">
            <div className="details-content">
              <p className="details-text">Expenses</p>
              <p className="details-money" testid="expensesAmount">
                400.000
              </p>
            </div>
          </div>
        </div>
        <div className="transaction-details">
          <div className="transactions-table-container">
            <ul className="transactions-table">
              <li className="table-header">
                <p className="table-header-cell">Food</p>
                <p className="table-header-cell">40000</p>
              </li>
              <li className="table-header">
                <p className="table-header-cell">Food</p>
                <p className="table-header-cell">40000</p>
              </li>
            </ul>
            <ul className="transactions-table">
              <li className="table-header">
                <p className="table-header-cell">Food</p>
                <p className="table-header-cell">40000</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="btn-add" onClick={toAdd}>
        <FaPlus />
      </button>
    </div>
  );
}

export default MoneyManager;
