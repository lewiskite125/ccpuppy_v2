import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="bg">
        <div className="bg">
          <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-4 col-lg-8 col-md-9 col-11 text-center">
                <div className="card">
                  <form
                    className="form-card"
                    method="POST"
                    action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScU_96lue-9quCtrbxteozz4OpsfB0YHKC-3_j93Sb-v-2ujw/formResponse"
                    onsubmit="return window.submitGoogleForm(this);"
                  >
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          First name<span className="text-danger"> *</span>
                        </label>
                        <input type="text" id="fname" name="entry.1520091336" />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Last name<span className="text-danger"> *</span>
                        </label>
                        <input type="text" id="lname" name="entry.402611125" />
                      </div>
                    </div>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-12 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Email<span className="text-danger"> *</span>
                        </label>
                        <input type="text" id="email" name="entry.803040484" />
                      </div>
                    </div>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-12 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Write a message
                          <span className="text-danger"> *</span>
                        </label>
                        <input type="text" id="ans" name="entry.1257027916" />
                      </div>
                    </div>
                    <div className="row justify-content-start">
                      <div className="form-group col-sm-6">
                        <button type="submit" className="btn-block btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
