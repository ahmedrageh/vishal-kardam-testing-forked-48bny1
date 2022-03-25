import Notifications, { notify } from "react-notify-toast";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
export default function ToasterComponent() {
  return (
    <>
      <Notifications />
      <ToastContainer />
      <button
        onClick={() => {
          toast.error("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          notify.show("message", "warning", 1000);
        }}
      >
        Click1
      </button>
    </>
  );
}
