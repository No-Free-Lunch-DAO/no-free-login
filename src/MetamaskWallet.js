import "./metamask.css";
import { useState, useEffect } from "react";
import Web3 from "web3";

function App() {
  const [web3, setWeb3] = useState();
  const [accountMetamask, setAccountMetamask] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try { const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (err) {
            console.log(err);
      }
    }
  }, []);

  const connectMetamask = async () => {
  let accountsForMeta = await window.ethereum.request({
     method: "eth_requestAccounts",
  });
     setAccountMetamask(accountsForMeta[0]);
  };

  return (
    <div className="App">
      <button className="metaConnect" onClick={() => { connectMetamask() }}>
        메타마스크 지갑 연결
      </button>
      <div className="userInfo">Metamask: {accountMetamask}</div>
    </div>
  );
}

export default App;

