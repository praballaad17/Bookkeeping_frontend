import React, { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import { useUser } from "../../Context/userContext";

export default function ToastItem({ toast, idx }) {
  const [showA, setShowA] = useState(true);
  const { removeToast } = useUser();
  const toggleShowA = () => {
    setShowA(!showA);
    removeToast(idx);
  };

  // console.log("rendered");
  return (
    <Toast
      show={showA}
      onClose={toggleShowA}
      bg={toast.isError ? "danger" : "success"}
      className="fs-3"
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bookkeeping</strong>
        <small className="text-muted">just now</small>
      </Toast.Header>
      <Toast.Body className="text-light">{toast.message}</Toast.Body>
    </Toast>
  );
}
