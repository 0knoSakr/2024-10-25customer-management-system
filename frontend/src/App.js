//ルーティングと全体構造
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link>顧客一覧</Link>
            </li>
            <li>
              <Link>顧客詳細</Link>
            </li>
            <li>
              <Link>顧客追加/編集</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
