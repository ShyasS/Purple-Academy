import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import AllCourses from "./components/All Courses/AllCourses";
import HomeFooterComp from './components/Home2/HomeFooterComp';
import './App.css';
import AllCoursesCoreJava from "./components/All Courses/AllCourses-CoreJava";
import WhyUsPage from "./components/WhyUs/WhyUsPage";
import ContactUs from './components/ContactUs/ContactUs';
function App() {
  return (
    <Router>
    <Header/>
     <Routes>
      <Route path = "/Home" element = {<Home/>} />
      <Route path = "/AllCourses" element ={<AllCourses/>}/>
      <Route path = "AllCourses/:id" element ={<AllCoursesCoreJava/>}/>
      <Route path = "/WhyUs" element ={<WhyUsPage/>}/>
      <Route path = "/ContactUs" element ={<ContactUs/>}/>
     </Routes>
      <HomeFooterComp/>
    </Router>

    
  );
}

export default App;
