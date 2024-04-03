import "./index.css"
import Home from "../../blogs/src/component/Home";
import Navbarr from "../../blogs/src/component/Navbarr";
// import Bloglist from "../../blogs/src/component/Bloglist"


function App() {

  return (
    <div className="App">
      <Navbarr/>
      <Home/>
      {/* <Bloglist/> */}
      
    </div>
  );
}

export default App;
