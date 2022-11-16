import React from "react";
import "./Home.css";
import ImgE from "../Images/glossary.png";

export default function Glossary() {
  return (
    <div>
      <div className="bg">
        <div className="bg"></div>
        <div className="background">
          <div className="text-center pt-5">
            <img className="w-100 glossary" src={ImgE} />
          </div>
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-md-4">
                <p className="list">
                  <li>CRYPTO TECHNOLOGY</li>
                  <li>BITCOIN</li>
                  <li>ETH</li>
                  <li>GAS</li>
                  <li>METAMASK</li>
                  <li>MINT</li>
                  <li>NFT</li>
                  <li>OPENSEA</li>
                </p>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
