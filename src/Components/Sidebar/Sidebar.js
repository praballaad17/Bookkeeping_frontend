import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ROUTES from '../../constants/routes';
import { SidebarData } from './SidebarData';
import "../../css/Sidebar.css";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  /*left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};*/
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default function Sidebar({ open, onClose }) {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="sidebar">
        <div className="mainbuttondiv">
          <button type="button" className="button-main" onClick={onClose}>
            My Company <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
        {/* <Link to="/dashboard/"><a className="active " href="#home">
        <i className="fa-solid fa-house"></i> Home
      </a></Link> */}
        <Link className="active " to={ROUTES.DASHBOARD}>
          <i class="fa-solid fa-house"></i> Home
        </Link>
        {/* <a href="#parties ">
        <i className="fa-solid fa-user-group"></i>Parties
      </a> */}
        <Link to={ROUTES.PARTIESINV}>
          <i className="fa-solid fa-user-group"></i>Parties
        </Link>
        <Link to={ROUTES.ITEM}>
          <i className="fa-solid fa-box-archive"></i>Item
        </Link>
        <Link to={ROUTES.SALESINV}>
          <i className="fa-solid fa-bag-shopping"></i>Sales
        </Link>
        <Link to={ROUTES.PURCHASEINV}>
          <i className="fa-solid fa-cart-plus"></i>Purchases
        </Link>
        <Link to={ROUTES.EXPENSES}>
          <i className="fa-solid fa-wallet"></i>Expenses
        </Link>
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

        {/* <a href="#Utilities">
          <i className="fa-solid fa-screwdriver-wrench"></i>Utilities
        </a> */}
        <a className="sidedropdown" style={{ "padding": "0", "margin": "0" }}>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </a>
        <Link to={ROUTES.SETTING}>
          <i className="fa-solid fa-gear"></i>Settings
        </Link>
        <hr />
        <a href="#Demo">
          <i className="fa-brands fa-youtube-square"></i>Request a Demo
        </a>

        <a href="#Feedback">
          <i className="fa-solid fa-star"></i>Share Feedback
        </a>
      </div>

      {/* <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav> */}
    </>
  );
}
