import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./js/login";
import SelectCompany from "./js/SelectCompany";
import Dashboard from "./js/Dashboard";
import UsersList from "./pages/Users/UsersList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/select-company" element={<SelectCompany />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
