import React from "react";
import "./Home.css";

import Img1 from "../Images/1.gif";
import Img2 from "../Images/2.gif";
import Img3 from "../Images/3.gif";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg">
      {/*   */}
      <div className="bg"></div>
      <div className="background">
        <div className="container">
          <div className="row  gap pt-5">
            <div className="col-sm-4 col-8 m-sm-0 p-sm-0">
              <img className="gif" src={Img1} />
            </div>
            <div className="col-sm-4 col-8 ml-auto m-sm-0 p-sm-0 midcol">
              {" "}
              <img className="gif" src={Img2} />
            </div>
            <div className="col-sm-4 col-8 m-sm-0 p-sm-0">
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
                <br /> ​ Follow our <a href="/Roadmap#top">roadmap</a> to see
                how we'll be releasing our puppies... ​
              </p>
            </div>
          </div>
          <div className="text-center py-5">
            <Link to="/Mintapuppy">
              <button className="btn">MINT NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
