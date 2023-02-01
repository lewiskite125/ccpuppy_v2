import React from "react";
import "./Home.css";

import coiinbase from "../Images/coinbase.jpg";
import ImgW from "../Images/wallet.png";

export default function HowtobuyETHonCoinbase() {
  return (
    <div>
      <div className="bg">
        <div className="bg"></div>
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <label className="heading">How to buy ETH on Coinbase</label>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-12">
                <label className="headd">COINBASE INTRODUCTION</label>
                <p>
                  For your very first crypto purchase, then you really need to
                  look no further than Coinbase.
                </p>
                <p>
                  Coinbase has the advantage of being a listed company in the
                  US, and hence subject to all the rules and regulations that
                  implies. It is audited, it produces quarterly accounts, and
                  security of your crypto assets is one of their top priorities.
                </p>
                <p>
                  Coinbase has a certain elegant simplicity about it, allowing
                  it to be an ideal introduction to the process of buying
                  cryptos. On the downside, the costs are slightly higher than
                  some other options, but those costs are worth incurring at
                  this early stage in my opinion.
                </p>
                <p>
                  There are the steps you need to take:
                  <br />
                  <br />
                  <ul>
                    <li>Set up an account at Coinbase.</li>
                    <li>Fund you Coinbase account.</li>
                    <li>Exchange funds for ETH.</li>
                  </ul>
                  Once we have done that, the next module will look at
                  transferring ETH to the MetaMask wallet you set up in Module
                  1.
                </p>
                <label className="headd">SET UP AN ACCOUNT AT COINBASE</label>
                <p>
                  May we suggest you use our marketing affiliate link:
                  <br />
                  <br />
                  <a
                    href="https://www.coinbase.com/join/timmis_d"
                    target="_blank"
                  >
                    https://www.coinbase.com/join/timmis_d
                  </a>
                  <br />
                </p>
                <p>
                  Alternatively, navigate directly to{" "}
                  <a href="https://coinbase.com/" target="_blank">
                    https://coinbase.com
                  </a>{" "}
                  and click on “Get Started”.
                </p>
                <p>
                  Input your REAL first and last name (you need to use your real
                  name for KYC ID Verification), your email address and your
                  password. Click the tick box to say you agree with the Terms
                  and Conditions and then press the “Create an Account” button.
                </p>
                <p>
                  The next page is a statement about protecting your data. Click
                  the “Next” button and then “Acknowledge” the Privacy Policy.
                  You will have the option of receiving marketing emails or not.
                  As expected, you will then need to verify your email address
                  by clicking the link in an email sent to you by Coinbase.
                </p>
                <p>
                  The next step is to verify your mobile number and then – for
                  regulatory reasons – you must complete all the questions on
                  the “Verify your identity” page. That process is relatively
                  easy but relatively comprehensive. Coinbase takes security
                  very seriously which gives us a lot of comfort.
                </p>
                <p>
                  This is the first but very important step on your crypto
                  adventure. Next up – fund your Coinbase account.
                </p>
                <label className="headd">FUND YOUR COINBASE ACCOUNT</label>
                <p>
                  Under the “Trade” option on the left-hand side of the screen
                  there is an option to “Add a Payment Method”.
                </p>
                <p>
                  Clicking on this gives you an option to deposit funds from an
                  EUR or GBP bank account, or by using a debit card. The latter
                  option will incur a fee but none for depositing from your bank
                  account.
                </p>
                <label className="headd">FUND YOUR COINBASE ACCOUNT</label>
                <p>Now this gets exciting!</p>
                <p>
                  Click the blue “Buy & Sell” button which takes you to this
                  screen:
                  <br />
                  <br />
                  <img src={coiinbase} className="w-100" />
                  <br />
                </p>
                <p>
                  Change Bitcoin to Ethereum, choose your payment method, input
                  the amount of ETH you wish to buy in your native currency and
                  click the blue “Buy Ethereum” button.
                </p>
                <p>And, er, that's it.</p>
                <p>
                  You have just completed your first crypto trade. You now own
                  cryptos. You are now part of the Crypto Revolution.
                </p>
                <p>A little pat on the back would not go amiss.</p>
                <p>
                  <small>
                    <i>Please feel free to contact us with any questions.</i>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
