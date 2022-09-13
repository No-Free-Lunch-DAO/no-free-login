import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MetamaskWallet from "./MetamaskWallet";
import KaikasWallet from "./KaikasWallet";

ReactDOM.render(
  <React.StrictMode>
    <MetamaskWallet />
    <KaikasWallet />
  </React.StrictMode>,
  document.getElementById("root")
);
