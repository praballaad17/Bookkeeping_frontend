import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import { INVOICETYPE } from "../../../constants/variables";
import { useUser } from "../../../Context/userContext";
import { getInvoiceUserId, deleteInvoice, createAndDownloadPdf, getInvoiceInvoiceId } from "../../../services/InvoiceServices";
import DeleteModal from "./DeleteModal";

export default function SalesInvoice() {
  const { user } = useUser();
  const [invoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(false)
  const [deleteModal, setDelete] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    const getInvoice = async () => {
      try {
        const purchaseInvoice = await getInvoiceUserId(INVOICETYPE.SALES, user?.id);
        setInvoice(purchaseInvoice);
        setLoading(false)

      } catch (error) {
        console.log(error);
      }
    };
    getInvoice();
    setRefresh(false)
  }, [user, refresh]);



  const openInvoice = (invoice) => {

    navigate(
      `/invoice/sales/open/${invoice._id}`,
      { state: { invoice } }
    )
  }

  const handleDownloadPdf = async (e, id) => {
    e.preventDefault()
    e.stopPropagation();
    const invoice = await getInvoiceInvoiceId(id)
    console.log(invoice);
    // console.log("print");
    createAndDownloadPdf(invoice)
  }

  const HandleDeleteInvoice = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDelete(true)
    console.log(invoice);
    // deleteInvoice(invoice._id)
  }


  return (
    <>
      <div className="purinvoice__head">
        <div className="leftheadpurchase">
          <span>Sales Invoices</span>
          <span className="smallfontpurchase">
            Bill your Sales to Customers
          </span>
        </div>
        <div className="rightheadpurchase">
          <i className="fa-solid fa-keyboard"></i>
          <button className="invoicesettingbutton">
            Invoice Settings <i className="fa-solid fa-gear "></i>
          </button>
          <button className="possalesbutton"> + POS Billing</button>
          {/* <button className="addpurchasebutton"> */}
          {/* {" "} */}
          <Link
            className="btn btn--tertiary addpurchasebutton"
            to={ROUTES.ADDSALESINV}
          >
            + Create Sales Invoice
          </Link>
          {/* </button> */}
        </div>
      </div>
      <div className="purinvoice__body">
        <div className="purinvoicebody">
          <div className="purchaseinvoicebodyleft">
            <div className="searchbox">
              <i style={{ "paddingLeft": "5px" }} className="fa-solid fa-magnifying-glass searchicon"></i>
              <input
                type="search"
                className="searchbar searchbarpurchase"
                id="searchitem"
                name="searchitem"
                spellCheck="false"
                data-ms-editor="true"
                placeholder="Search Sales Invoices"
              />
            </div>
            <div>
              <select id="types" name="timespan" className="timespanpurchase">
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
            <div>
              <select id="types" name="timespan" className="reportpurchase">
                <option value="" disabled selected hidden>
                  {" "}
                  Reports{" "}
                </option>
                <option value="salessummary">Sales Summary</option>
                <option value="gstr1">GSTR-1 (Sales)</option>
                <option value="daybook">DayBook</option>
                <option value="billwiseprofit">Bill Wise Profit</option>
              </select>
            </div>
          </div>
        </div>
        <table className="purinvoice__table item__table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Invoice Number</th>
              <th>Party Name</th>
              <th>Catagories Name</th>
              <th>Total</th>
              <th>Recieve Party</th>
              <th>Balance</th>
              <th>Print</th>
            </tr>
          </thead>
          <tbody>
            {!loading ?
              invoice.map((invoice) => (
                <tr key={invoice._id} className="purinvoice__table--invoice" onClick={() => openInvoice(invoice)}>
                  <td>
                    <div onClick={HandleDeleteInvoice}>
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </td>
                  <td>{invoice?.date}</td>
                  <td>{invoice?.invoiceNumber}</td>
                  <td>{invoice?.party?.name}</td>
                  <td></td>
                  <td>{invoice?.total}</td>
                  <td></td>
                  <td>{invoice?.party?.balance ? invoice.party.balance : 0}</td>
                  <td onClick={(e) => handleDownloadPdf(e, invoice._id)}><i class="fa-solid fa-print"></i></td>
                  <DeleteModal deleted={(e) => { e.stopPropagation(); deleteInvoice(invoice._id); setDelete(false); setRefresh(true) }} open={deleteModal} onClose={() => setDelete(false)} />

                </tr>
              )) :
              <tr>
                <td colspan="8">
                  <div className="u-flex-all-center"> Loading...</div>
                </td>
              </tr>
            }
          </tbody>
        </table>

        {!invoice || !invoice.length && (<span className="purchasebodyspan">
          No Sales Invoice made during the selected time period
        </span>)}
      </div>
    </>
  );
}
