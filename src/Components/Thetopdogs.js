import React from "react";
import "./Home.css";
import ImgG from "../Images/T1.png";
import ImgH from "../Images/T2.png";
import ImgI from "../Images/T3.png";
import ImgJ from "../Images/T4.png";
import ImgK from "../Images/T5.png";
export default function Thetopdogs() {
  return (
    <div>
      <div className="bg">
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img className="w-100 team" src={ImgG} />
                    <br />
                    <label className="pt-2">
                      Mark Timmis
                      <br /> CEO & CO-FOUNDER
                    </label>
                    <p className="pt-">
                      Mark has been actively involved in cryptos since 2013.
                      Prior to co-founding Curious Cryptos Ltd. he spent 25
                      years in the City working as an Investment Banker.
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    <img className="w-100 team" src={ImgH} />
                    <br />
                    <label className="pt-2">
                      Nick Ilston
                      <br />
                      CTO & CO-FOUNDER
                    </label>
                    <p className="pt-">
                      A serial entrepreneur who has always harnessed cutting
                      edge IT technology to further his business interests. Nick
                      is very much of the suck it and see approach to business –
                      if you do not make mistakes, you cannot make things
                      better.
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    {" "}
                    <img className="w-100 team invertH" src={ImgI} />
                    <br />
                    <label className="pt-2">
                      Janey de Nordwall
                      <br />
                      HEAD OF PRODUCTION
                    </label>
                    <p className="pt-">
                      BAFTA award winning film producer Janey has over 25 years
                      working in the film and advertising industry. She
                      published her first book ‘From A Wonky Path To An Open
                      Road’ in 2020 and launched The Knoydart Retreat Ltd. in
                      2021.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5 pb-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-md-4 text-center">
                    <img className="w-100 team" src={ImgJ} />
                    <br />
                    <label className="pt-2">
                      Lewis Kite
                      <br />
                      IT DIRECTOR
                    </label>
                    <p className="pt-">
                      Lewis brings decades of experience both as a coder in his
                      early days, and as a systems analyst, to direct the work
                      we do from a technical perspective. His knowledge and
                      enthusiasm about all things crypto is legion.
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    {" "}
                    <img className="w-100 team" src={ImgK} />
                    <br />
                    <label className="pt-2">
                      Robin Timmis
                      <br />
                      HEAD OF DATA ANALYTICS &<br /> CODING
                    </label>
                    <p className="pt-">
                      Robin has recently completed her PhD. in inertial confinement fusion at Oxford University is halfway through a two-year post doc project at that university.  This project means she spends her time designing experiments utilising quadrillion watt lasers and analysing the subsequent output data produced by supercomputers.
                    </p>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
