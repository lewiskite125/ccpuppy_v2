import React from "react";
import "./Home.css";

import Img1 from "../Images/1.gif";
import Img2 from "../Images/2.gif";
import Img3 from "../Images/3.gif";
export default function Home() {
  return (
    <div className="bg">
     
      <hr className="line" />
      <div className="bg"></div>
      <div className="background">
        <div className="container">
          <div className="row  gap pt-5">
            <div className="col-md-4 m-0 p-0">
              <img className="gif" src={Img1} />
            </div>
            <div className="col-md-4 m-0 p-0">
              {" "}
              <img className="gif" src={Img2} />
            </div>
            <div className="col-md-4 m-0 p-0">
              {" "}
              <img className="gif" src={Img3} />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-12 text-center ">
              <p>
                Our Nifty Puppies has been lovingly nurtured by The Top Dogs at
                Curious Cryptos Ltd and have all been
                <br /> born at the Binance Smart Chain Kennel.
                <br />
                <br /> Each puppy is totally unique and sits, stands or squats
                in its very own world with very individual traits. You
                <br />
                can own as many as you like from our limited litter of 500.
                <br />
                <br /> ​ Dogs are our best friends, and nobody can live without
                friends, so a % of our net profits will be going
                <br /> straight to GUIDE DOGS FOR THE BLIND.
                <br />
                <br /> ​ Follow out roadmap to see how we'll be releasing our
                puppies... ​
              </p>
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
  );
}
