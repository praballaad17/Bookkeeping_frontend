import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ROUTES from '../constants/routes';

import "../css/sidebar.css";

export default function Sidebar({ open, onClose }) {
  return (
      
    <div className="sidebar">
      <div className="mainbuttondiv">
        <button type="button" className="button-main" onClick={onClose}>
          My Company  <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      {/* <Link to="/dashboard/"><a className="active " href="#home">
        <i className="fa-solid fa-house"></i> Home
      </a></Link> */}
      <a className="active " href="#home">
        <i className="fa-solid fa-house"></i> Home
      </a>
      <a href="#parties ">
        <i className="fa-solid fa-user-group"></i>Parties
      </a>
      <Link to={ROUTES.ITEM}>
        <i className="fa-solid fa-box-archive"></i>Item
      </Link>
      <a href="#Sale ">
        <i className="fa-solid fa-bag-shopping"></i>Sales
      </a>
      <a href="#Purchases ">
        <i className="fa-solid fa-cart-plus"></i>Purchases
      </a>
      <a href="#Expenses ">
        <i className="fa-solid fa-wallet"></i>Expenses
      </a>
      <a href="#Cash ">
        <i className="fa-light fa-wallet"></i>Cash and Bank
      </a>
      <a href="#Online ">
        <i className="fa-solid fa-store"></i>My Online Store
      </a>
      <a href="#Reports ">
        <i className="fa-light fa-signal"></i>Reports
      </a>
      <hr />
      <a href="#Otherproducts">
        <i className="fa-solid fa-circle-stop"></i>Other Products
      </a>
      <a href="#sync">
        <i className="fa-solid fa-arrow-rotate-right"></i>Sync
      </a>
      <a href="#Backup">
        <i className="fa-solid fa-window-restore"></i>Backup/Restore
      </a>
      <a href="#Utilities">
        <i className="fa-solid fa-screwdriver-wrench"></i>Utilities
      </a>
      <a href="#Settings">
        <i className="fa-solid fa-gear"></i>Settings
      </a>
      <hr />
      <a href="#Demo">
        <i className="fa-brands fa-youtube-square"></i>Request a Demo
      </a>
      <a href="#Feedback">
        <i className="fa-solid fa-star"></i>Share Feedback
      </a>
    </div>
  );
}
