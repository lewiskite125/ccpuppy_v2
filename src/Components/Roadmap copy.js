import React from "react";
import "./Home.css";
import Img4 from "../Images/Roadmap.png";
import Img5 from "../Images/icon1.png";
import Img6 from "../Images/icon2.png";
import Img7 from "../Images/icon3.png";
import Img8 from "../Images/icon4.png";
import Img9 from "../Images/icon5.png";
import { Link } from "react-router-dom";

export default function Roadmap() {
  return (
    <div className="bg">
      <div className="heading text-center pt-5 pb-5">
        <label className="heading">ROADMAP</label>
      </div>
      <div className="container">
        <div className="main-timeline new">
          {/* <!-- start experience section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <img className="iconn" src={Img5} />
                </span>
              </div>
            </div>
            <div className="timeline-content new1">
              <h5 className="title">Who let the dogs out?</h5>
              <p className="description">
                Drum roll please...
                <br />
                <li>Our first litter of 999 little puppies are born.</li>
                <li>
                  The first 99 pups are FREE and will be released from the
                  kennel on NOW
                </li>
                <li>
                  If this is the first time you have ever minted an NFT then
                  watch our{" "}
                  <Link to="/Mintapuppy">
                    <span className="style">HOW TO MINT</span>
                  </Link>{" "}
                  video guide created by Mark Timmis, CEO of Curious Cryptos
                  Ltd, and he’ll walk you through the whole process.
                </li>
              </p>
            </div>
          </div>
          {/* <!-- end experience section--> */}

          {/* <!-- start experience section--> */}
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <img className="iconn" src={Img6} />
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">How much is that doggy in the window?</h5>
              <p className="description text-left">
                <li>
                  As soon as the first 100 free pups have been homed, we will
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
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer new">
                <span className="date">
                  <img className="iconn1" src={Img7} />
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Nature Nurture</h5>
              <p className="description">
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
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <img className="iconn2" src={Img8} />
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Good dog!</h5>
              <p className="description text-left">
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
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <img className="iconn3" src={Img9} />
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">Release the hounds!</h5>
              <p className="description">
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
    </div>
  );
}
