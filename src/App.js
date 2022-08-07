import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/annual" component={AnnualReport} />
          <Route path="/team" component={Teams} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/sign-up" component={SignUp} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
