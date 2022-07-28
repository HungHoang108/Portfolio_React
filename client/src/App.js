import NavBar from "./component/nav-bar/nav-bar.component";
import { Routes, Route } from "react-router-dom";
import Home from "./route/home/home.route";
import Contact from "./route/contact/contact.route";
import Project from "./route/projects/project.route";



function App() {
  return (
  
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/project" element={<Project />}/>
          
        </Route>
      </Routes>
  );
}

export default App;
