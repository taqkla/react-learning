import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import './index.css'
import Github, { githubInfoLoader } from './components/Github/Github';

// import Header from './component/Header/Header.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "/header",
//     element: <Header />
//   },
// ]);

const NotFound = () => <h2>404 Page Not Found</h2>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader} path="/github" element={<Github />} />
      <Route component={NotFound} />
      {/* <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github />}
    /> */}
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
