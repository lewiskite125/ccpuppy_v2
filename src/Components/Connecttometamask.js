import React from "react";
import "./Home.css";

import ImgB from "../Images/connect.png";
import ImgC from "../Images/foots.png";
import video1 from "../Images/file.mp4";

export default function Connecttometamask() {
  return (
    <div>
      <div className="bg">
       
        <hr className="line" />
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <img className="connect" src={ImgB} />
              </div>
            </div>
            <div className="row gapp">
              <div className="col-md-12">
                <label className="headd">'HOW TO...' INSTALL METAMASK</label>
                <div className="video">
                  <video width="720" height="440" controls src={video1}>
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="row pt-2">
                  <div className="col-2"></div>
                  <div className="col-6">
                    {" "}
                    <img className="foots" src={ImgC} />
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
            </div>
                      <div className="row gapp">
                          <div className="col-2"></div>
              <div className="col-md-10">
                <label className="headd">'HOW TO...' CONNECT METAMASK</label>
                <div className="video">
                  <video width="720" height="440" controls src={video1}>
                    Your browser does not support the video tag.
                                  </video>
                                  <div className="row pt-2">
                  <div className="col-2"></div>
                  <div className="col-6">
                    {" "}
                    <img className="foots" src={ImgC} />
                  </div>
                  <div className="col-4"></div>
                </div>
                </div>
              </div>
            </div>
                      <div className="row gapp pb-5">
                          <div className="col-4"></div>
              <div className="col-md-8">
                <label className="headd">
                  'HOW TO...' ADD ETH TO YOUR ACCOUNT
                </label>
                <div className="video">
                  <video width="720" height="440" controls src={video1}>
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}
