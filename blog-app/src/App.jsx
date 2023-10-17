import React from 'react';
import { BrowserRouter as Router, Route, Link, Navigate, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/old-contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/old-contact" component={<Navigate to="/contact" replace />} />
        {/* <Route path="/old-route">
          <Navigate to="/about" />
        </Route> */}
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>New Contact Page</h2>;
const NotFound = () => <h2>404 Page Not Found</h2>;

export default App;
