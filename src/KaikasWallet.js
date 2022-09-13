import Caver from "caver-js";
import { klaytn } from "caver-js";
import "./kaikas.css";
//import { useState, useEffect } from "react";

const caver = new Caver(klaytn);

function kaikasApp() {

    const connectKaikas = async () => {
        if(typeof window.klaytn !== "undefined") {
            const provideKaikas = window["klaytn"];
        }
        try {
            const accounts = await window.klaytn.enable();
            const account = window.klaytn.selectedAddress;
    
            const connectCaver = new Caver(window.klaytn);
            const getBalanceAccount = await caver.klay.getBalance(account);
        } catch(error) {
            console.error(error);
        }
    }
    return (
        <div className="App">
          <button className="metaConnect" onClick={() => { connectKaikas() }}>
            카이카스 지갑 연결
          </button>
        </div>
      );
}

export default kaikasApp();
