import React from "react";
import "./Home.css";
import ImgF from "../Images/faq.png";

export default function Faqs() {
  return (
    <div>
      <div className="bg">
        
        <hr className="line" />
        <div className="bg"></div>
        <div className="background">
          <div className="text-center pt-5">
            <img className="w-100 faq" src={ImgF} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <label> • How much does a CCPUPPY cost?</label>
                <p>
                  At launch, 1,000 CCPuppies will be available for minting. The
                  first 200 will be free for purchase, though you will need to
                  pay the (small) gas fees charged by the BSC blockchain. After
                  that, each batch of 200 puppies will be offered for sale at
                  ever increasing prices. If all 1,000 have sold by the time you
                  read this, and you still want to buy a CCPuppy, then read the
                  FAQ 'How do I BUY A CCPUPPY?'
                </p>
                <label className="pt-4"> • How much does a CCPUPPY cost?</label>
                <p>
                  Add this token address <b className="headd">(TBC)</b> to your
                  MetaMask wallet configured to Smart Chain (detailed
                  instructions
                  <br /> are to be found in the FAQs section).
                  <br /> Click{" "}
                  <b className="headd"> CONNECT METAMASK WALLET </b>
                  <br />
                  Click <b className="headd"> NAME MY CCPUPPY</b>
                  <br /> Add your CCPuppy name and description
                  <br />
                  Click <b className="headd"> MINT MY CCPUPPY</b>
                  <br /> This will take you to{" "}
                  <b className="headd"> nftkey.app</b> from where you will be
                  able to pay the gas fee and purchase price in <br />
                  order to mint your brand new CCPuppy.
                </p>
                <label className="pt-4"> • How do I SELL MY CCPUPPY?</label>
                <p>
                  If you were a lucky pup and bought one of the first 1,000
                  minted CCPuppies, then you will have the option to list your
                  puppy for sale at nftkey.app and your CCPuppy will appear on
                  the BUY A CCPUPPY page.
                </p>
                <label className="pt-4">
                  {" "}
                  • How do I BUY A MINTED CCPUPPY?
                </label>
                <p>
                  CCPuppies will be available for sale after minting at: Click
                  the BUY A CCPUPPY tab that will display all the CCPuppies for
                  sale.{" "}
                  <a href=""> https://nftkey.app/collections/ccpuppies/</a>
                </p>
                <label className="pt-4"> • How do I view my CCPUPPIES?</label>
                <p>
                  To view your CCPuppies, head over to your private YOUR LITTER
                  page.
                </p>
                <label className="pt-4"> • Are CCPUPPIES like Bitcoin?</label>
                <p>
                  First things first; CCPuppies and Cryptocurrencies are NEVER
                  the same. Rather, CCPuppies can well be considered as
                  Cryptocollectibles. Here is how it can be explained even
                  better:- Cryptocurrencies are more likes dollars or pounds.
                  Cryptocollectibles (CCPuppies) can be considered more like
                  assets, such as baseball cards or a piece of fine art. As the
                  Smart contract depicts, you are the sole owner of any
                  CCPuppies that you own. As it is with real-world stuff, like a
                  product or property that you own, the market price depends on
                  factors like demand and supply.
                </p>
                <span className="fees pt-5">FAQ's on FEES</span>
                <br />
                <label className="pt-4"> What is "gas"?</label>
                <p>
                  Gas refers to the price to be paid for a transaction or
                  contract to be executed in the Binance Smart Chain.
                </p>
                <label className="pt-4">Fees</label>
                <p>
                  There is a fee of 0.025 BNB for all for sale listing. 0.5%
                  fees on all successful Puppy sales.
                </p>
                <span className="fees pt-5"> FAQ's on METAMASK</span>
                <br />
                <label className="pt-4">
                  How to view your CCPUPPIES in MetaMask?
                </label>
                <p>
                  Go to MetaMask ADD TOKEN In CUSTOM TOKEN tab put this address
                  TBC, you should see PNNY. Never transfer your PUPPIES from
                  MetaMask. Use the site.
                </p>
                <label className="pt-4">
                  What is our Smart contract Address?
                </label>
                <p>https://bscscan.com/address/TBC</p>
                <label className="pt-4">
                  How do I install and use MetaMask?
                </label>
                <p>
                  A very fine question, for which we have all the answers - see
                  the PDF guides to download below.
                </p>
                <span className="meta">PDF 'HOW TO' GUIDES</span>
                <br />
                <p className="pt-4 pb-4">
                  For a more a detailed guide of how to install MetaMask or fund
                  your MetaMask with BNB please download our free PDF How To
                  guides.
                </p>
                <span className="meta">
                  <li>METAMASK</li>
                  <li>BNB</li>
                </span>
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
