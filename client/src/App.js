import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "routes";
import Navbar from "components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              element={route.element}
              key={index}
            ></Route>
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
