import React from "react";
import "./Home.css";

import ImgA from "../Images/foot.png";
export default function Mintapuppy() {
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
              <div className="row pt-5">
                <div className="col-12 text-center">
                  <p className="pt-4">
                    Click <b className="headd">CONNECT METAMASK WALLET</b>
                  </p>
                  <div className="text-center pt-2">
                    <button className="btn">CONNECT META MASK WALLET</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
