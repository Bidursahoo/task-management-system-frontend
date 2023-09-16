import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import Profile from "./Pages/Profile";
import Task from "./Pages/Task";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/tasks" element={<Task/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
