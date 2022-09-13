import Caver from "caver-js";
import { klaytn } from "caver-js";
import "./kaikas.css";
import { useState, useEffect } from "react";

const caver = new Caver(klaytn);

function kaikasApp() {
    const [ Caver, setCaver ] = useState();
    const [ accountKaikas, setAccountKaikas ] = useState("");

    useEffect(() => {
        if(typeof window.klaytn !== "undefined") {
            try {
                const connectCaver = await window.klaytn.enable();
                const account = window.klaytn.selectedAddress;
                const getBalanceAccount = await caver.klay.getBalance(account);
                setCaver(connectCaver);
            } catch(error) {
                console.error(error);
            }
        }
    }, []);

    const connectKaikas = async () => {
        
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