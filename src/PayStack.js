import React from "react";
import { usePaystackPayment } from "react-paystack";

const config = {
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_live_e62e7f49ce97cb6c7b336a39fd3c96b2fc88b564"
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Paystack Hooks Implementation
      </button>
    </div>
  );
};
export default function PayStack() {
  return (
    <>
      <div className="App">
        <PaystackHookExample />
      </div>
    </>
  );
}
