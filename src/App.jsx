import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {useContext} from "react";
import {Context} from "./context/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
   const currentUser = useContext(Context);
   console.log(currentUser)

  return (
  <Router>
        <Topbar />
        <Routes>
          <Route path="/" exact element={<Homepage></Homepage>}></Route> 
          <Route path="/register" element={ <Register />} ></Route>
          <Route path="/login" element={ <Login />} ></Route>
          <Route path="/write" element={currentUser ? <Write /> : <Register />} ></Route>
          <Route path="/settings" element={currentUser ? <Settings /> : <Register/>} ></Route>
          <Route path="/post/:postId" element={<Single />} ></Route> 
        </Routes>
      </Router>
  );
}

export default App;
