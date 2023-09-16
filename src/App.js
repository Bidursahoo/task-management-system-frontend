import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import Profile from "./Pages/Profile";
import Task from "./Pages/Task";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Error from "./Pages/Utility Pages/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/tasks" element={<Task/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
