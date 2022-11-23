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
                  <form className="form-card" onsubmit="event.preventDefault()">
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label className="form-control-label px-3">
                          First name<span className="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder=""
                          onblur="validate(1)"
                        />{" "}
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label className="form-control-label px-3">
                          Last name<span className="text-danger"> *</span>
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
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-12 flex-column d-flex">
                        {" "}
                        <label className="form-control-label px-3">
                          Email<span className="text-danger"> *</span>
                        </label>{" "}
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder=""
                          onblur="validate(3)"
                        />{" "}
                      </div>
                      {/* <div className="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label className="form-control-label px-3">
                          Phone number<span className="text-danger"> *</span>
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
                    {/* <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        {" "}
                        <label className="form-control-label px-3">
                          Job title<span className="text-danger"> *</span>
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
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-12 flex-column d-flex">
                        {" "}
                        <label className="form-control-label px-3">
                          Write a message
                          <span className="text-danger"> *</span>
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
                    <div className="row justify-content-start">
                      <div className="form-group col-sm-6">
                        {" "}
                        <button type="submit" className="btn-block btn-primary">
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
      </div>
    </div>
  );
}
