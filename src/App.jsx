import React, { useState, useEffect } from 'react';
import '../src/Components/index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projectcard';
import Loader from './Components/Loader';
import Contact from './Components/Contact';

function App() { 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header/> <Hero/> </> ,
    },
    {
      path: "/about",
      element: <><Header/><About/></>,
    },
    {
      path: "/skills",
      element: <><Header/><Skills/> </>,
    },
    {
      path: "/projects",
      element: <><Header/><Projects/></>,
    },

    {
      path: "/contact",
      element:<><Header/> <Contact/></>,
    }
  ]);

  return (
    <div className="App">

      {loading ? (
        <Loader />
      ) : (
        <>
          <RouterProvider router={router} />
          <Footer/>
        </>
      )}
      
    </div>
  );
}

export default App;


