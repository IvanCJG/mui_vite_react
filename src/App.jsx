import { useRoutes } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from './components/templates/Navbar';
import Router from "./routes/Router"
import Home from './components/pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {

  return (
    <Router />
  )
}

export default App
