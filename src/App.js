import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <Router>
      <CommonHeader />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route exact path="/" component={Page1} />
    </Router>
  );
}

function CommonHeader() {
  return (
    <div className="container-fluid">
      <div className="row bg-dark" style={{ height: "55px" }}>
        <div className="col-3 d-flex align-items-center text-light ">
          Project Book
        </div>

        <div className="col-9 d-flex justify-content-end align-items-center">
          <Link to="/">
            <button className="btn btn-secondary">Page1</button>
          </Link>
          <Link to="/page2">
            <button className="btn btn-secondary">Page1</button>{" "}
          </Link>
          <Link to="/page3">
            <button className="btn btn-secondary">Page1</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
