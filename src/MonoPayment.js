import React from "react";
import MonoConnect from "@mono.co/connect.js";

export default function MonoPayment() {
  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      key: "test_pk_NwUpQ3IrAUZOUgorriTs",
      scope: "payments",
      data: {
        type: "onetime-debit", // one-time-debit || recurring-debit
        amount: 150000, // amount in kobo
        description: "Payment for light bill"
      },
      onSuccess: (chargeObject) =>
        console.log(`charged successfully`, chargeObject)
    });

    monoInstance.setup();

    return monoInstance;
  }, []);

  return (
    <div>
      <button onClick={() => monoConnect.open()}>Pay with Mono</button>
    </div>
  );
}
