import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import KaikasWallet from "./KaikasWallet";
import MetamaskWallet from "./MetamaskWallet";

ReactDOM.render(
  <React.StrictMode>
    <MetamaskWallet />
    <KaikasWallet />
  </React.StrictMode>,
  document.getElementById("root")
);
