//ルーティングと全体構造
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import CustomerFromPage from "./pages/CustomerFormPage";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">顧客一覧</Link>
              </li>
              <li>
                <Link to="/customer/form">顧客追加</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<CustomerListPage/>}></Route>
            <Route path="/customer/:id" element={<CustomerDetailPage/>}></Route>
            <Route path="/customer/form" element={<CustomerFromPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
