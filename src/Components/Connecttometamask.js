import React from "react";
import "./Home.css";

import ImgB from "../Images/metamask.png";
import ImgW from "../Images/wallet.png";

export default function Connecttometamask() {
  return (
    <div>
      <div className="bg">
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <label className="heading">Install and set-up MetaMask</label>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-12">
                <label className="headd">METAMASK INTRODUCTION</label>
                <p>
                  MetaMask has become one of the world’s most popular wallets
                  for cryptos. We will be using MetaMask to store ETH before we
                  mint a CC Pup.
                </p>
                <label className="headd">METAMASK DESCRIPTION</label>
                <p>
                  MetaMask is an online web wallet that is available as an
                  extension to most popular web browsers. For privacy reasons,
                  and to prevent the large tech companies monetising your data
                  for their benefit, we would always recommend using MetaMask as
                  an extension to Brave Browser.
                </p>
                <label className="headd">METAMASK INSTALLATION</label>
                <p>
                  <b>Step 1.</b> Go to the{" "}
                  <a href="https://metamask.io" target="_blank">
                    <u>MetaMask</u>
                  </a>{" "}
                  website.
                </p>
                <p>
                  <b>Step 2.</b> Choose your browser and install.
                </p>
                <p>
                  <b>Step 3.</b> Click “Add to &lt;your browser&gt;” in the
                  upper right corner.
                </p>
                <p>
                  <b>Step 4.</b> Click “Add Extension” to complete the
                  installation.
                  <br />
                  You will know MetaMask has been installed when you see the fox
                  logo on the upper right-hand corner of your browser:
                  <br /> <img src={ImgB} className="logo-docs ml-3" />
                </p>
                <p>
                  <b>Step 5.</b> Click “Get Started”.
                </p>
                <p>
                  <b>Step 6.</b> Click “Create a Wallet”.
                </p>
                <p>
                  <b>Step 7.</b> Agree or not to send data to “Help us improve
                  MetaMask”.
                </p>
                <p>
                  <b>Step 8.</b> Create a password. <br />
                  At this stage there is short 1 minute 35 second video about
                  securing your wallet focussing on the importance of keeping
                  your recovery phrase safe. Unless you are a seasoned user of
                  cryptos, you cannot go far wrong by watching this video.
                </p>
                <p>
                  <b>Step 9.</b> Click “Next” and then “Click here to reveal
                  secret words”. <br />
                  Write these words down accurately and in order, and store
                  somewhere safe. Never reveal them to anyone else. Ownership of
                  your crypto assets in MetaMask is proven by knowing the secret
                  words.
                </p>
                <p>
                  <b>Step 10.</b> Click “Next” and input your recovery phrase to
                  prove that you have in fact written it down.
                </p>
                <p>
                  <b>Step 11.</b> Click “All Done”.
                  <br />
                  At this point you will be taken to an overview of your wallet
                  showing your wallet details on the Ethereum network:
                  <br />
                  <img src={ImgW} className="w-100" />
                  <br />
                  <br />
                  The string of letters and numbers under “Account 1” is your
                  public key which acts as your wallet address. We will be using
                  this address in Module 3 to fund your wallet.
                  <br />I suggest you change the name “Account 1” to something
                  more intuitive. Simply click on the three dots on the
                  right-hand side, navigate to “Account details” and click the
                  pen sign.
                </p>
                <label className="headd">REINSTALLING METAMASK</label>
                <p>
                  Uninstalling followed by re-installing a program is often the
                  most common way to deal with bugs. The same applies to
                  MetaMask as well, and the process couldn't be any simpler.
                  After you have made a fresh installation of MetaMask just type
                  in the twelve seed words and you are good to go. You will also
                  be provided the option to reset your password, which can be
                  either a new one or the one used before.
                  <br />
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
