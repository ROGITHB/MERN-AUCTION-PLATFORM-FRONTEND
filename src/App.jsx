import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import AuctionItem from "./pages/AuctionItem";
import Auctions from "./pages/Auctions";
import Contact from "./pages/Contact";
import CreateAuction from "./pages/CreateAuction";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import React, { useEffect } from "react";
import SideDrawer from "./layout/SideDrawer";
import SignUp from "./pages/SignUp";
import SubmitCommission from "./pages/SubmitCommission";
import UserProfile from "./pages/UserProfile";
import ViewAuctionDetails from "./pages/ViewAuctionDetails";
import ViewMyAuctions from "./pages/ViewMyAuctions";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getAllAuctionItems } from "./store/slices/auctionSlice";
import { fetchLeaderboard, fetchUser } from "./store/slices/userSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getAllAuctionItems());
    dispatch(fetchLeaderboard());
  }, []);
  return (
    <Router>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit-commission" element={<SubmitCommission />} />
        <Route path="/how-it-works-info" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auction/item/:id" element={<AuctionItem />} />
        <Route path="/create-auction" element={<CreateAuction />} />
        <Route path="/view-my-auctions" element={<ViewMyAuctions />} />
        <Route path="/auction/details/:id" element={<ViewAuctionDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/me" element={<UserProfile />} />
      </Routes>
      <ToastContainer position="top-right" />
    </Router>
  );
};

export default App;