import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css"
import Navbar from "./common/Navbar"
import About from "./componets/About/About";
import Destinations from "./componets/Destinations/Home";
import Gallery from "./componets/gallery/Gallery";
import Home from "./componets/pages/Home";
import SinglePage from "./SinglePage/SinglePage";
import Blog from "./componets/Blog/Blog"
import BlogSingle from "./componets/Blog/blog-single-page/BlogSingle";
import Testimonial from "./componets/Testimonial/Testimonial";
import Contact from "./componets/Contact/Contact";
import Login from "./componets/login/Login";
import Register from "./componets/login/Register";
import Footer from "./common/footer/Footer"
function App(){
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/'exact component={Home}></Route>
      <Route path='/about'exact component={About}></Route>   
      <Route path='/gallery'exact component={Gallery}></Route>   
      <Route path='/destination'exact component={Destinations}></Route>   
      <Route path='/singlepage/:id'exact component={SinglePage}></Route>   
      <Route path='/blog'exact component={Blog}></Route>
      <Route path='/blogsingle/:id'exact component={BlogSingle}></Route>  
      <Route path='/testimonial'exact component={Testimonial}></Route>
      <Route path='/contact' exact component={Contact} ></Route>
      <Route path='/sign-in' exact component={Login} ></Route>
      <Route path='/Register' exact component={Register} ></Route>
      
    </Switch>
    <Footer />
    </Router>
    
    </>
  )
}

export default App