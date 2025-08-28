import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import About from "../pages/About";
import User from "../pages/User";
import SinglePage from "../pages/SinglePage";

export default function AllRoutes() {
// make Home component (Method 1)
// const Home = ()=>{
//      return <h1>Home Page</h1>;
    
// }

  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/user/:userId" element={<SinglePage />} />
      </Routes>
    
  );
}
