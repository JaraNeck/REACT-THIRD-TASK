import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import MonthSelector from "./components/MonthSelector";
import List from "./components/List";
import Detail from "./components/Detail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { getUserInfo } from "./lib/api/auth";
import Layout from "./components/Layout";

function App() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(null);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <Router>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%", maxWidth: "800px" }}>
          <Routes>
            <Route path="/" element={<Layout user={user} setUser={setUser} />}>
              <Route
                index
                element={
                  <>
                    <Form user={user} addExpense={addExpense} />
                    <MonthSelector
                      selectedMonth={selectedMonth}
                      setSelectedMonth={setSelectedMonth}
                    />
                    <List expenses={expenses} selectedMonth={selectedMonth} />
                  </>
                }
              />
              <Route
                path="/detail/:id"
                element={
                  <Detail expenses={expenses} setExpenses={setExpenses} />
                }
              />
              <Route
                path="/profile"
                element={<Profile user={user} setUser={setUser} />}
              />
            </Route>

            <Route path="/sign_in" element={<SignIn setUser={setUser} />} />
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
