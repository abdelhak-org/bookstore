
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import "./App.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}
function App() {
  return (
  <>
  
       <Routes>
        <Route exact path ="/"  element={<Home/>}/>
        <Route path ="/signup"  element={<SignUp/>}/>
        <Route path ="/login"  element={<LogIn/>}/>

       </Routes>
  </>
      
  );
}


export default  App;
