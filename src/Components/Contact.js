import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="bg">
       
        <hr className="line" />
        <div className="bg">
          <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
              <div class="col-xl-4 col-lg-8 col-md-9 col-11 text-center">
              
                <div class="card">
                
                  <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                          First name<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder=""
                          onblur="validate(1)"
                        />{" "}
                      </div>
                      <div class="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                          Last name<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          placeholder=""
                          onblur="validate(2)"
                        />{" "}
                      </div>
                    </div>
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-12 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                           Email<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder=""
                          onblur="validate(3)"
                        />{" "}
                      </div>
                      {/* <div class="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                          Phone number<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="mob"
                          name="mob"
                          placeholder=""
                          onblur="validate(4)"
                        />{" "}
                      </div> */}
                    </div>
                    {/* <div class="row justify-content-between text-left">
                      <div class="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                          Job title<span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="job"
                          name="job"
                          placeholder=""
                          onblur="validate(5)"
                        />{" "}
                      </div>
                    </div> */}
                    <div class="row justify-content-between text-left">
                      <div class="form-group col-12 flex-column d-flex">
                        {" "}
                        <label class="form-control-label px-3">
                         Write a message
                          <span class="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="ans"
                          name="ans"
                          placeholder=""
                          onblur="validate(6)"
                        />{" "}
                      </div>
                    </div>
                    <div class="row justify-content-start">
                      <div class="form-group col-sm-6">
                        {" "}
                        <button type="submit" class="btn-block btn-primary">
                          Submit
                        </button>{" "}
                      </div>
                    </div>
                  </form>
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
