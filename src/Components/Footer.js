import React from "react";
import "./Home.css";
import { Route, Routes, Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "//gmail.us13.list-manage.com/subscribe/post?u=aa0ea959aad0a21d20a103d91&amp;id=cd7995ff75&amp;f_id=0054e1e2f0";
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <>
      <input
        ref={(node) => (email = node)}
        aria-label="Email"
        aria-describedby="button-addon2"
        type="email"
        className="form__email col-12 col-sm-9 px-3"
        placeholder="e.g.puppy@kennel.com"
      />
      <button
        className="form__button col-12 col-sm-3"
        id="button-addon2"
        type="button"
        onClick={submit}
      >
        JOIN
      </button>
      {status === "sending" && (
        <div className="col-12 text-center" style={{ color: "blue" }}>
          sending...
        </div>
      )}
      {status === "error" && (
        <div
          className="col-12 text-center"
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="col-12 text-center"
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </>
  );
};

export default function Footer() {
  return (
    <div className="bg">
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="subscribe">
              <h2 className="subscribe__title">JOIN THE PACK</h2>
              <p className="subscribe__copy">
                Subscribe to the{" "}
                <a href="https://www.curiouscryptos.com/">
                  <b className="tran">Curious Cryptos Ltd </b>
                </a>
                <br />
                mailing list for all things crypto...
              </p>
              <div className="container">
                <div className="row">
                  <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                      <CustomForm
                        status={status}
                        message={message}
                        onValidated={(formData) => subscribe(formData)}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row pt-4 pb-4">
          <div className="col-md-4 text-center">
            <a
              href="https://4c614bd7-d7cd-4bc0-beb8-24aa6ebdd3ea.filesusr.com/ugd/22f8f8_d64c7d7502a642c2a808b7019630bc96.pdf"
              target="_blank"
              className="link"
            >
              TERMS AND CONDITIONS
            </a>
          </div>
          <div className="col-md-4 text-center">
            <p className="litt m-0">
              <b>©2022 Curious Cryptos Ltd.</b>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <a
              href="https://4c614bd7-d7cd-4bc0-beb8-24aa6ebdd3ea.filesusr.com/ugd/22f8f8_f4222ea0f3814ddc92b07df05fb92739.pdf"
              target="_blank"
              className="link"
            >
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
