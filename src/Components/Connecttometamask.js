import React from "react";
import "./Home.css";

import ImgB from "../Images/connect.png";
import ImgC from "../Images/foots.png";
import video1 from "../Images/file.mp4";

export default function Connecttometamask() {
  return (
    <div>
      <div className="bg">
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <img className="connect" src={ImgB} />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-12">
                <label className="headd">'HOW TO...' INSTALL METAMASK</label>
                <div className="video">
                  <video width="720" controls src={video1}>
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
            <div className="row pt-3">
              <div className="col-2"></div>
              <div className="col-md-10">
                <label className="headd">'HOW TO...' CONNECT METAMASK</label>
                <div className="video">
                  <video width="720" controls src={video1}>
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
            <div className="row pt-3 pb-5">
              <div className="col-4"></div>
              <div className="col-md-8">
                <label className="headd">
                  'HOW TO...' ADD ETH TO YOUR ACCOUNT
                </label>
                <div className="video">
                  <video width="720" controls src={video1}>
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
