import React from "react";
import "./Home.css";

import transfer from "../Images/transfer.png";

export default function TransferETHtoMetaMask() {
  return (
    <div>
      <div className="bg">
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <label className="heading">Transfer ETH to MetaMask</label>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-12">
                <label className="headd">COINBASE INTRODUCTION</label>
                <p>This process is very straightforward.</p>
                <p>
                  Firstly, navigate to your MetaMask wallet and click on your
                  public key shown under the name of your wallet. This copies
                  your public aka the wallet address to the clipboard.
                </p>
                <p>
                  Next, back in Coinbase, click on “Send/Receive”, ensure the
                  crypto chosen is ETH, click “Send all”, paste your public key
                  into the “To” box, leave the “Note” box blank, and click
                  continue:
                  <br />
                  <br />
                  <img src={transfer} className="transfer" />
                </p>
                <p>
                  There will be network fees to pay for the transfer which are
                  currently around 25p.
                </p>
                <p>
                  Within the next 10 minutes, and probably much sooner than that
                  depending on network congestion, the balance of ETH in your
                  Coinbase account will go to zero, and an equivalent amount
                  minus the transfer fee will show up in your MetaMask wallet.
                </p>
                <p>
                  <small>
                    <i>Please feel free to contact us with any questions.</i>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
