import React from "react";
import "./Home.css";
import Img4 from "../Images/Roadmap.png";
import Img5 from "../Images/icon1.png";
import Img6 from "../Images/icon2.png";
import Img7 from "../Images/icon3.png";
import Img8 from "../Images/icon4.png";
import Img9 from "../Images/icon5.png";


export default function Roadmap() {
  return (
    <div className="bg">
     
      <hr className="line" />
      <div className="heading text-center pt-5 pb-5">
        <label className="heading">ROADMAP</label>
      </div>
      <div class="container">
        <div class="main-timeline new">
          {/* <!-- start experience section--> */}
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <img className="iconn" src={Img5} />
                </span>
              </div>
            </div>
            <div class="timeline-content new1">
              <h5 class="title">Who let the dogs out?</h5>
              <p class="description">
                Drum roll pleases...
                <br />
                <li>Our first litter of 500 little puppies are born.</li>
                <li>
                  The first 100 pups are FREE and will be released from the
                  kennel on [DATE]
                </li>
                <li>
                  If this is the first time you have ever minted an NFT then
                  watch our
                  <br />
                  <span className="style">HOW TO MINT</span> video guide created
                  by Mark Timmis, CEO of Curious Cryptos Ltd, and he’ll walk you
                  through the whole process.
                </li>
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}

          {/* <!-- start experience section--> */}
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <img className="iconn" src={Img6} />
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">How much is that doggy in the window?</h5>
              <p class="description text-left">
                <li>
                  As soon as the first 100 free pups have been homes, we will
                  release the other litters in packs of 100.{" "}
                </li>
                <li>
                  Follow us on Twitter to know when the release dates are coming
                  up.
                </li>
                <li>101 – 200 = £</li>
                <li> 201 – 300 = ££</li>
                <li>301 – 400 = £££</li>
                <li>401 – 500 = ££££</li>
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}

          {/* <!-- start experience section--> */}
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer new">
                <span class="date">
                  <img className="iconn1" src={Img7} />
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Nature Nurture</h5>
              <p class="description">
                <li>
                  At time of minting you can decide whether your puppy remains
                  forever a pup or grows up with changing traits and
                  characteristics.
                </li>
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}

          {/* <!-- start experience section--> */}
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <img className="iconn2" src={Img8} />
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Good dog!</h5>
              <p class="description text-left">
                <li>
                  If you choose to nurture and train your pup you must engage
                  with the puppy training school where you will receive for the
                  right nutrition and to learn how to get your pup to sit, beg,
                  fetch, etc.
                </li>
                <li>
                  As your puppy gets older, your NFT itself changes and you will
                  be send an updated NFT
                </li>
                <li>
                  {" "}
                  You may even decide to train your pup for Guide Dogs for the
                  Blind. If you choose this option you will receive a free pup.
                </li>
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
              <div class="date-outer">
                <span class="date">
                  <img className="iconn3" src={Img9} />
                </span>
              </div>
            </div>
            <div class="timeline-content">
              <h5 class="title">Release the hounds!</h5>
              <p class="description">
                <li>
                  Once your pup is fully grown and can behave themselves, they
                  are released into the doggy metaverse.
                </li>
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}
        </div>
      </div>
      {/* FOOTER */}
      <div className="bg">
        <div className="container">
          <div className="row pt-4">
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
  );
}
