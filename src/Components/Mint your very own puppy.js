import React from "react";
import "./Home.css";

import mintpng from "../Images/mint.jpg";

export default function Mintyourveryownpuppy() {
  return (
    <div>
      <div className="bg">
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <label className="heading">Mint your very own puppy</label>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-12">
                <label className="headd">AN INTRODUCTION TO MINTING</label>
                <p>
                  Minting refers to the process of creating your puppy and
                  storing the metadata on the blockchain.
                </p>
                <p>
                  That metadata is linked to your public address thus proving
                  your ownership of your puppy.
                </p>
                <label className="headd">THE MINTING PROCESS</label>
                <p>
                  Head on over to our Curious Cryptos’ Pups website and click on
                  the “Mint” tab which looks like this:
                  <img src={mintpng} className="w-100" />
                </p>
                <p>
                  All DeFi (decentralised finance) protocols and interaction
                  with decentralised Web3 require you to connect a wallet, in
                  this case your MetaMask wallet you set up in Module 1. You can
                  think of your wallet, which is unique and owned only by you,
                  as replacing the need for a username and password.
                </p>
                <p>
                  Click on “Connect MetaMask Wallet” which will bring up a
                  screen in your wallet asking for permission to connect. Click
                  “Next” then “Connect” and you will see a button to “Mint your
                  puppy”.
                </p>
                <p>
                  Click on that button, approve the transaction in MetaMask, and
                  you are all done.
                </p>
                <p>You are now the proud owner of a CCPUP.</p>
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
