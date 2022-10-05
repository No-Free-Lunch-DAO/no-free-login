import Caver from "caver-js";
import "./kaikas.css";
import { useEffect } from "react";

function KaikasWallet(){
  useEffect(() => {
    if(typeof window.klaytn !== "undefined") {
      const provider = window["klaytn"];
      try {
        const accounts = window.klaytn.enable();
        const account = window.klaytn.selectedAddress;
        console.log(`this->`, account);
        
        const caver = new Caver(window.klaytn);
        const balance = caver.klay.getBalance(account);
      } catch(err) {
          console.error(err);
      }
    }
  })
  
  async function connectKaikas() {
    await window.klaytn.on("accountsChanged", function(accounts) {
      accounts = window.klaytn.enable();
    })
  };
  
  async function checkWallet() {
    console.log(await window.klaytn._kaikas.isUnlocked());
  }

  return (
    <div className="App">
      <button className="kaiConnect" onClick={() => { connectKaikas()}}>
        Connect with Kaikas
      </button>
      <div className="userInfos">Kaikas: {window.klaytn.selectedAddress}</div>
    </div>
);
}


export default KaikasWallet;