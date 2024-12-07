import React, { useState } from "react";
import ImgA from "../Images/foot.png";
import "./Home.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { ethers } from "ethers";

// https://goerli.infura.io/v3/bd3283c53475479792ed8f68c398a0e9
// https://mainnet.infura.io/v3/97d9f5fedfa34db7a15d53259ffe34c2

import ABI from "./abi.json";
const PROVIDER =
  "https://mainnet.infura.io/v3/97d9f5fedfa34db7a15d53259ffe34c2";
  
const CONTRACT = "0x4484a2097c01AaE7bec6a75E93d7A3d5b0cA4825"; // Actual ethereum network contract address

// const CONTRACT = "0x72020AA0feAC7B86ab15f891711bd6e7Ba023717"; // sepolia testing network contract address

export default function Mintapuppy() {
  const [connected, setConnected] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [max, setMax] = useState(3);

  const connect = async () => {
    if (!window.ethereum) {
      console.error("MetaMask is not installed.");
      toast.error("Metamask not found");
      return;
    }
  
    const provider = new ethers.BrowserProvider(window.ethereum); // Updated for ethers v6

    try {
      await provider.send("eth_requestAccounts", []);
    } catch (error) {
      console.error("Error requesting accounts:", error);
      toast.error(error.message);
      return;
    }
  
    const signer = await provider.getSigner();
  
    // Create contract instance
    const ct = new ethers.Contract(CONTRACT, ABI, signer);
  
    // Interact with the contract
    try {
      const network = await provider.getNetwork();

      //Comment out this below code while doing testing
      if (String(network.chainId) !== "1") {
        toast.error("You're on different network at Metamask, Change it to Ethereum Network & Try again!");
        return;
      }

      //For testing uncomment the below code of sepolia testing network
      // if (String(network.chainId) !== "11155111") {
      //   toast.error("You're on different network at Metamask, Change it to Ethereum Network & Try again!");
      //   return;
      // } 

      const price = await ct.price_Public();
      const max = await ct.mint_perAdd();
      setPrice(Number(price));
      setMax(Number(max));
      setConnected(true);
    
    } catch (error) {
      console.error("Error calling price_Public:", error);
      toast.error(error.message);
    }
  };

  const mint = async () => {
    if (!window.ethereum) {
      toast.error("Wallet not found");
      return;
    }
  
    const provider = new ethers.BrowserProvider(window.ethereum);
  
    let m;
    try {
      m = await provider.send("eth_requestAccounts", []);
      m = m[0];
    } catch (e) {
      toast.error(e.message);
      return;
    }
  
    const signer = await provider.getSigner();
    const ct = new ethers.Contract(CONTRACT, ABI, signer);
  
    const network = await provider.getNetwork();

    //Comment out this below code while doing testing
    if (String(network.chainId) !== "1") {
      toast.error("You're on a different network in MetaMask. Switch to Sepolia Testnet!");
      return;
    }
  
    //For testing uncomment the below code of sepolia testing network
    // if (String(network.chainId) !== "11155111") {
    //   toast.error("You're on a different network in MetaMask. Switch to Sepolia Testnet!");
    //   return;
    // }

    try {
      if (!(await ct.status_Public())) {
        toast.error("Minting is not active!");
        return;
      }
  
      const balance = Number(await provider.getBalance(m));
      if (balance < Number(price) * quantity) {
        toast.error("Insufficient ETH");
        return;
      }
  
      await toast.promise(
        new Promise(async (resolve, reject) => {
          try {
            const tx = await ct.mint_Public(String(quantity), {
              value: ethers.parseEther(String(price * quantity)),
            });
            const receipt = await tx.wait();
            console.log("Transaction receipt:", receipt);
            resolve();
          } catch (e) {
            console.error(e);
            reject(e);
          }
        }),
        {
          pending: "Processing transaction...",
          success: "Minting complete!",
          error: "Transaction failed.",
        }
      );
    } catch (e) {
      console.error(e);
      toast.error(e.reason || e.message || "An error occurred");
    }
  };

  return (
    <div className="bg">
      <div className="background">
        <div className="container fullheight">
          <div className="row pt-5">
            <div className="col-md-12 text-center">
              <div className="row">
                <div className="col-12 text-center">
                  <img className="foot" src={ImgA} />
                </div>
              </div>
              {connected ? (
                <div className="row pt-4">
                  <div className="col-12 text-center">
                    <p className="text-center">
                      Price: <b>{(price / 10e18) * quantity} ETH</b>
                    </p>
                  </div>
                  <div className="col-12 text-center">
                    <a
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : quantity)
                      }
                      className="quantitybtn"
                    >
                      -
                    </a>
                    <span className="px-2 quantity">{quantity}</span>
                    <a
                      onClick={() =>
                        setQuantity(quantity < max ? quantity + 1 : quantity)
                      }
                      className="quantitybtn"
                    >
                      +
                    </a>
                  </div>
                  <div className="col-12 pt-3">
                    <a className="quantitybtn px-4" onClick={mint}>
                      MINT
                    </a>
                  </div>
                </div>
              ) : (
                <div className="row pt-5">
                  <div className="col-12 text-center">
                    <p className="pt-4">
                      Click <b className="headd">CONNECT METAMASK WALLET</b>
                    </p>
                    <div className="text-center pt-2">
                      <button onClick={connect} className="btn">
                        CONNECT METAMASK WALLET
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={4000} hideProgressBar theme="colored" />
    </div>
  );
}
