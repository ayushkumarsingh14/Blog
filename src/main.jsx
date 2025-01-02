import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './index.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Github from './Components/Github/Github';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='github' element={<Github/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
