import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoneyManager from "./components/MoneyManager";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoneyManager />} />
        <Route path="/add" element={<AddTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
