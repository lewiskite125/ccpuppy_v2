import React from "react";
import "./Home.css";

import ImgA from "../Images/foot.png";
export default function Mintapuppy() {
  return (
    <div className="bg">
     
      <hr className="line" />
      <div className="background">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 text-center">
              <p>
                From [date] 2022 1,000 CCPuppies can be minted using this page.
                <br />
                <br /> The first 200 Puppies are FREE (though a small gas fee
                will be charged by the BSC blockchain).
                <br />
                <br /> ​ After that, each batch of 200 Puppies will be offered
                for sale at ever increasing prices as
                <br /> follows:
              </p>
              <div className="row pt-5">
                <div className="col-3"></div>
                <div className="col-3">
                  <p className="txt">0-200</p>
                  <p className="txt"> 200-400 </p>
                  <p className="txt"> 400-600 </p>
                  <p className="txt"> 600-800 </p>
                  <p className="txt"> 800-1,000</p>
                </div>
                <div className="col-3">
                  <p className="txt">Free</p>
                </div>
                <div className="col-3"></div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <img className="foot"src={ImgA}/>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-12 text-center">
                  <label className="head">How To Mint Your CCPuppy</label>
                  <p>Add this token address <b>(TBC)</b> to your MetaMask wallet configured to Smart Chain (detailed <br />instructions are to be found in the FAQs section).</p>
                  <p className="pt-4">Click <b className="headd">CONNECT METAMASK WALLET</b></p>
                  <div className="text-center pt-2">
                    <button className="btn">CONNECT META MASK WALLET</button>
                  </div>
                  <p className="pt-4">Click <b className="headd">NAME MY CCPUPPY</b></p>
                  <p className="pt-3">Add your CCPuppy name and description.</p>
                  <p className="pt-4">Click <b className="headd">MINT MY CCPUPPY</b></p>
                  <p className="pt-4">This will take you to <b className="headd">nftkey.app</b> from where you will be able to pay the gas fee and purchase price in order to mint your brand new CCPuppy.</p>
                  <p className="pt-4 pb-3">Your CCPuppy can be viewed either on <b className="headd">nftkey.app</b> or on the tab called <b className="headd">YOUR LITTER</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background"></div>
      {/* FOOTER */}
      <div className="bg">
        <div className="container">
          <div className="row pt-3">
            <div className="col-md-2"></div>
            <div className="col-md-8 subscribe">
              <h2 class="subscribe__title">JOIN THE PACK</h2>
              <p class="subscribe__copy">
                Subscribe to the <b className="tran">Curious Cryptos Ltd </b>
                <br />
                mailing list for all things crypto...
              </p>
              <div class="form">
                <input
                  type="email"
                  class="form__email"
                  placeholder="e.g.puppy@kennel.com"
                />
                <button class="form__button">JOIN</button>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row pt-4 pb-4">
            <div className="col-md-4 text-center">
              <span className="text">TERMS AND CONDITIONS</span>
            </div>
            <div className="col-md-4 text-center">
              <p className="litt">©2022 Curious Cryptos Ltd.</p>
            </div>
            <div className="col-md-4 text-center">
              <span className="text">PRIVACY POLICY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
