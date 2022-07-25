import NavBar from "./component/nav-bar/nav-bar.component";
import { Routes, Route } from "react-router-dom";
import Home from "./route/home/home.route";
import Contact from "./route/contact/contact.route";
import Project from "./route/projects/project.route";
import Blog from "./route/blog/blog.route";


function App() {
  return (
  
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home />}/>
          <Route path="project" element={<Contact />}/>
          <Route path="contact" element={<Project />}/>
          <Route path="blog" element={<Blog />}/>
        </Route>
      </Routes>
  );
}

export default App;
