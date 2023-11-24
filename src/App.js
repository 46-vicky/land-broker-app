import {Routes, Route} from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";
import Home from "./Home";

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
