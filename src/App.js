import {Routes, Route} from "react-router-dom";
import Login from "./Components/Auth/Login";
import Layout from "./Layouts/Layout";
import Home from "./Components/Auth/Home";
import Plans from "./Components/Plans/Plans";
import Employee from "./Components/Employee/Employee"
import Flats from "./Components/Flats/Flats"
import Orders from "./Components/Orders/Orders"

function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="plan" element={<Plans />}/>
        <Route path="employee" element={<Employee/>}/>
        <Route path="flats" element={<Flats/>}/>
        <Route path="orders" element={<Orders/>}/>
    </Route>
    <Route path="login" element={<Login/>}/>
   </Routes>
  );
}

export default App;
