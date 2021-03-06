import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { INVOICETYPE } from "../../constants/variables";
import { useUser } from "../../Context/userContext";
import { getInvoiceUserId } from "../../services/InvoiceServices";

export default function PurchaseInvoice() {
  const { user } = useUser();
  const [invoice, setInvoice] = useState();

  useEffect(() => {
    const getInvoice = async () => {
      const purchaseInvoice = await getInvoiceUserId(INVOICETYPE.PURCHASE, user?.id);
      console.log(purchaseInvoice);
      setInvoice(purchaseInvoice);
    };
    getInvoice();
  }, [user]);

  const getDate = (d) => {
    const date = new Date(d);
    // console.log(date.getDate());
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <>
      <div className="purinvoice__head">
        <div className="leftheadpurchase">
          <span>Purchase Invoices</span>
          <span className="smallfontpurchase">
            Bill your Purchases From suppliers
          </span>
        </div>
        <div className="rightheadpurchase">
          <i class="fa-solid fa-keyboard"></i>
          <button className="invoicesettingbutton">
            Invoice Settings <i class="fa-solid fa-gear "></i>
          </button>
          {/* <button className="addpurchasebutton"> */}
          {/* {" "} */}
          <Link
            className="btn btn--tertiary addpurchasebutton"
            to={ROUTES.ADDPURCHASEINV}
          >
            Add Purchase Invoice
          </Link>
          {/* </button> */}
        </div>
      </div>
      <div className="purinvoice__body">
        <div className="purinvoicebody">
          <div className="purchaseinvoicebodyleft">
            <div class="searchbox">
              <i style={{"paddingLeft":"5px"}} class="fa-solid fa-magnifying-glass searchicon"></i>
              <input
                type="search"
                class="searchbar searchbarpurchase"
                id="searchitem"
                name="searchitem"
                spellcheck="false"
                data-ms-editor="true"
                placeholder="Search Purchase Invoices"
              />
            </div>
            <div >
              <select id="types" name="timespan" class="timespanpurchase">
                <option value="currentyear">Current Fiscal Year</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="thisweek">This Week</option>
                <option value="thismonth">This Month</option>
                <option value="thisquarter">This Quarter</option>
                <option value="custom">Custom</option>
                <option value="7days">Last 7 days</option>
                <option value="previousyear">Previous Fiscal Year</option>
                <option value="alltime">All Time</option>
              </select>
            </div>
          </div>
          <div className="purchaseinvoicebodyright">
            <div >
              <select id="types" name="timespan" class="reportpurchase">
                <option value="" disabled selected hidden> Reports </option>
                <option value="s=gstr">GSTR-2 (Purchase)</option>
                <option value="daybook">DayBook</option>
              </select>
            </div>
          </div>
        </div>
        <table className="purinvoice__table item__table">
          <thead>
            <th>#</th>
            <th>Date</th>
            <th>Ref No</th>
            <th>Party Name</th>
            <th>Catagories Name</th>
            <th>Type</th>
            <th>Total</th>
            <th>Recieve Party</th>
            <th>Balance</th>
            <th>Print</th>
          </thead>
          <tbody>
            {invoice &&
              invoice.map((invoice) => (
                <tr>
                  <td></td>
                  <td>{invoice?.date}</td>
                  <td>{invoice?.invoiceNumber}</td>
                  <td>{invoice?.party?.name}</td>
                  <td></td>
                  <td></td>
                  <td>{invoice?.total}</td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
        <span className="purchasebodyspan">No Purchase Invoice made during the selected time period</span>
      </div>
    </>
  );
}
