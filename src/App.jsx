import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        
        <h1 className="take">Take your style out of this world!</h1>
        <Link to="/products" className="switch" style={{textDecoration: 'none', color: 'black'}}> SHOP NOW </Link>
        
      </div>
      
    </>
  );
}

export default App;
