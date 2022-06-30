import axios from 'axios';
import Url from "../config.json";
// import { saveAs } from 'file-saver';

// const apiEndpointInvoice = Url?.apiUrl + "/invoice";
const apiEndpointInvoice = Url?.localUrl + "/invoice";
const apiEndpointItem = Url?.localUrl + "/invoice";


export const createInvoice = async (invoice, itemlist, userId) => {
  try {
    const request = { data: { ...invoice, itemlist, userId } };
    const response = await axios(`${apiEndpointInvoice}/addInvoice`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      ...request,
    });
    return response.data;

  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const getInvoiceUserId = async (type, userId) => {
  try {

    const response = await axios(`${apiEndpointInvoice}/invoiceId/${userId}/type/${type}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;

  } catch (err) {
    throw new Error(err.response.data.error);
  }
}

export const getInvoiceInvoiceId = async (invoiceId) => {
  try {

    const response = await axios(`${apiEndpointInvoice}/invoiceId/${invoiceId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;

  } catch (err) {
    throw new Error(err.response.data.error);
  }
}

export const updateInvoice = async (invoiceId, userId, itemlist, invoice) => {
  try {
    const request = { data: { ...invoice, itemlist } };
    const response = await axios(`${apiEndpointInvoice}/userId/${userId}/invoiceId/${invoiceId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      ...request,
    });
    return response.data;
  } catch (error) {

  }
}

export const deleteInvoice = async (id) => {
  try {

    const response = await axios(`${apiEndpointInvoice}/invoice/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;

  } catch (err) {
    throw new Error(err.response.data.error);
  }
}

export const createAndDownloadPdf = async (itemList, party, invoice) => {
  const state = { name: "name", price1: 1200, price2: 1300, receiptId: 1 }
  const res = await axios.post(`${apiEndpointInvoice}/invoice-pdf`, state).then(() => axios.get(`${apiEndpointInvoice}/get-pdf-invoice`, { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      console.log(pdfBlob);
      // saveAs(pdfBlob, 'newPdf.pdf');
    })
  // return res;
}