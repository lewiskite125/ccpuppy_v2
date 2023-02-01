import React from "react";
import "./Home.css";

import importC from "../Images/import.jpg";

export default function InputNiftyPupscontracttoMetaMask() {
  return (
    <div>
      <div className="bg">
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <label className="heading">
                  Input Nifty Puppies contract to MetaMask
                </label>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-12">
                <p>
                  This is the most technical aspect of minting your very own
                  Curious Cryptos’ puppy, but it really isn’t that difficult at
                  all.
                </p>
                <p>
                  Just follow these instructions to the letter and all will be
                  well.
                </p>
                <p>
                  Navigate to your MetaMask wallet, scroll down, and click on
                  “import tokens”.
                </p>
                <p>
                  This will take you to a screen with two options: “Search” or
                  “Custom token” – choose the latter.
                </p>
                <p>
                  The next screen looks like this:
                  <br />
                  <br />
                  <img src={importC} />
                </p>
                <p>
                  Copy and paste this contract address into “Token contract
                  address” and add the details for “Token symbol” and “Token
                  decimal” if they are not auto filled:
                </p>
                <p>
                  Contract: 0x4484a2097c01aae7bec6a75e93d7a3d5b0ca4825 <br />
                  Symbol: CCPUPS <br />
                  Token decimal: 0
                </p>
                <p>
                  When done click “Add custom token” and then CCPUPS will appear
                  under “Assets”.
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
