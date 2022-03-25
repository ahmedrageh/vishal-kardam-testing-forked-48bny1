import React from "react";
import MonoConnect from "@mono.co/connect.js";

export default function Mono() {
  const [code, setCode] = React.useState();
  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded successfully"),
      onSuccess: ({ code }) => {
        setCode(code);
        console.log(`Linked successfully: ${code}`);
      },
      key: "test_pk_RFUnMzWXugM4un5av12r"
      // key: "test_pk_NwUpQ3IrAUZOUgorriTs"
    });

    monoInstance.setup();

    return monoInstance;
  }, []);
  function getAuthMono() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("mono-sec-key", "test_sk_ySsr7sKvY8eba2rXxSCg");

    var raw = JSON.stringify({
      code: code
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const authdata = fetch(
      "https://api.withmono.com/account/auth",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(authdata);
  }
  return (
    <div>
      <button onClick={() => monoConnect.open()}>Link account with Mono</button>
      <button
        onClick={() => {
          getAuthMono();
        }}
      >
        get user iD
      </button>
    </div>
  );
}
