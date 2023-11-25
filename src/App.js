import {Routes, Route} from "react-router-dom";
import Login from "./Components/Auth/Login";
import Layout from "./Layouts/Layout";
import Home from "./Components/Auth/Home";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
    </Route>
    <Route path="login" element={<Login/>}/>
   </Routes>
  );
}

export default App;
