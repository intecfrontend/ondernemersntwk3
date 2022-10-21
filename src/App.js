import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Searchpage";
import Magazines from "./pages/Magazines";
import Welkom from "./pages/Welkom";
import Consument from "./pages/Consument";
import Consumentmag from "./pages/MagazinesConsu";
import Ondernemermag from "./pages/MagazinesOndernem";
import Bedankt from "./pages/BedanktAccount";
import "@identitybuilding/idb-react-ui-elements/dist/styles/Colors.css";
import './App.css';
import './AppColors.css';

// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>