import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './sass/style.scss';
import './sass/style.css';
import Landing from './pages/landing';
import Navbar from './layouts/navbar';
import About from './pages/about.js';
import Projects from './pages/projects';
import Marvelapi from './pages/marvelapi.js';
import NotExist from './NotExist.js';


function App() {

  // Allows a more quicker and easier way of client handling using react-router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>  
      <Route index element={<Landing />} />
      <Route path="about" element={<About/>} />
      <Route path="projects" element={<Projects/>} />

      {/* project pages */}
      <Route path="marvelapi" element={<Marvelapi/>} />
      
      {/* 404 page link */}
      <Route path="*" element={<NotExist />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
