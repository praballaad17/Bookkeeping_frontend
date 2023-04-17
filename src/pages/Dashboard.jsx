import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import DetailsModal from "../Components/DetailsModal";
import Sidebar from "../Components/Sidebar/Sidebar";
// import Uppernavbar from "../Components/Uppernavbar";
import * as ROUTES from "../constants/routes";
import Item from "../Components/Item/Item";
import AddItem from "../Components/Item/AddItem";
import ImportItem from "../Components/Utilities/ImportItem";
import PurchaseInvoice from "../Components/Invoice/PurchaseInvoice/PurchaseInvoice";
import AddPurchaseInvoice from "../Components/Invoice/PurchaseInvoice/AddPurchaseInvoice";
import SalesInvoice from "../Components/Invoice/SalesInvoice/SalesInvoice";
import AddSalesInvoice from "../Components/Invoice/SalesInvoice/AddSalesInvoice";
import ItemTable from "../Components/Utilities/ItemTable";
import Parties from "../Components/Parties/Parties";
import AddParties from "../Components/Parties/AddParties";
import Expenses from "../Components/Invoice/Expenses";
import AddExpenses from "../Components/Invoice/AddExpenses";
import Setting from "../Components/Setting/Setting";
import PartyDetails from "../Components/Parties/PartyDetails";
import GstDashboard from "../Components/GST/index.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Dashboard({ user: loggedInUser }) {
  const [open, setOpen] = useState(false);

  if (!loggedInUser) return <Navigate to={`/authentication${ROUTES.LOGIN}`} />;

  return (
    // <Container className="w-100">
    <div className="dashboard-main">
      {/* <div id="top-div">
        <Uppernavbar />
      </div> */}
      {/* <div id="bottom-div"> */}
      {/* <div id="sidebar-div"> */}
      <Row className="h-100">
        <Col lg={2}>
          <Sidebar
            open={open}
            onClose={() => {
              setOpen(true);
            }}
          />
        </Col>
        <Col lg={10} className="h-100">
          {/* </div> */}
          {/* <div id="central-div"> */}
          <DetailsModal open={open} onClose={() => setOpen(false)} />
          <Routes>
            <Route path={ROUTES.ITEM} element={<Item />} />
            <Route path={ROUTES.GSTDASH} element={<GstDashboard />} />
            <Route path="/item/add" element={<AddItem />} />
            {/* <Route path="/item-table" element={<ItemTable />} />  */}
            <Route path="/purchase" element={<PurchaseInvoice />} />
            <Route path="/purchase/add" element={<AddPurchaseInvoice />} />
            <Route
              path="/invoice/purchase/open/:id"
              element={<AddPurchaseInvoice />}
            />
            <Route path="/sales" element={<SalesInvoice />} />
            <Route path="/sales/add" element={<AddSalesInvoice />} />
            <Route
              path="/invoice/sales/open/:id"
              element={<AddSalesInvoice />}
            />
            <Route path="/parties/*" element={<Parties />} />
            <Route path="/party/open/:id" element={<PartyDetails />} />
            <Route path="/parties/add" element={<AddParties />} />
            <Route path={ROUTES.IMPORTITEM} element={<ImportItem />} />
            <Route path="/setting/*" element={<Setting />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/addexpenses" element={<AddExpenses />} />
            <Route
              path={ROUTES.DASHBOARD}
              element={<Home handleOpen={() => setOpen(true)} />}
            />
            <Route
              path="/"
              element={<Navigate to={ROUTES.DASHBOARD} />}
              replace
            />
          </Routes>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </Col>
      </Row>
    </div>
  );
}
