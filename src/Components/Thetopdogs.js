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
       
        <hr className="line" />
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img className="w-100 team" src={ImgG} />
                    <label className="pt-2">
                      Mark Timmis
                      <br /> CEO & CO-FOUNDER
                    </label>
                    <p className="pt-3">
                      Mark has been actively involved in cryptos since 2013.
                      Prior to co-founding Curious Cryptos Ltd. he spent 25
                      years in the City working as an Investment Banker.
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    <img className="w-100 team" src={ImgH} />
                    <label className="pt-2">
                      Nick Ilston
                      <br />
                      CTO & CO-FOUNDER
                    </label>
                    <p className="pt-3">
                      A serial entrepreneur who has always harnessed cutting
                      edge IT technology to further his business interests. Nick
                      is very much of the suck it and see approach to business –
                      if you do not make mistakes, you cannot make things
                      better.
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    {" "}
                    <img className="w-100 team" src={ImgI} />
                    <label className="pt-2">
                      Janey de Nordwall
                      <br />
                      HEAD OF PRODUCTION
                    </label>
                    <p className="pt-3">
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
                    <label className="pt-2">
                      Lewis Kite
                      <br />
                      IT DIRECTOR
                    </label>
                    <p className="pt-3">
                      Lewis brings decades of experience both as a coder in his
                      early days, and as a systems analyst, to direct the work
                      we do from a technical perspective. His knowledge and
                      enthusiasm about all things crypto is legion.
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    {" "}
                    <img className="w-100 team" src={ImgK} />
                    <label className="pt-2">
                      Robin Timmis
                      <br />
                      HEAD OF DATA ANALYTICS &<br /> CODING
                    </label>
                    <p className="pt-3">
                      Robin has recently started her PhD. in inertial
                      confinement fusion at Oxford University. This project
                      means she spends her time designing experiments utilising
                      quadrillion watt lasers and analysing the subsequent
                      output data produced by supercomputers.
                    </p>
                  </div>
                  <div className="col-2"></div>
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
