import React from "react";
import "./Home.css";
import punk from "../Images/punk.png";

export default function Faqs() {
  return (
    <div>
      <div className="bg">
        <div className="background">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <label className="heading">FAQs Part One</label>
                <h5>
                  <b>Background and Theory</b>
                </h5>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <label>1. Help!!</label>
                <p>
                  “I am very new to this – how can you help me?” I hear you cry.
                </p>
                <p>
                  These FAQs cover what we believe to be the crucial information
                  you need to get involved with Nifty Puppies.
                </p>
                <p>
                  Alongside this text, we have produced detailed modules of all
                  the technical and practical aspects to assist you on your
                  Puppy NFT journey.
                </p>
                <p>
                  If you any questions or queries the CCC team is ready and
                  willing to assist immediately.
                </p>
                <p>
                  In the first instance please email:{" "}
                  <a href="mailto:mark@curiouscryptos.com">
                    mark@curiouscryptos.com
                  </a>
                </p>
                <label className="">2. What are NFTs?</label>
                <p>NFTs is an acronym for Non-Fungible Tokens.</p>
                <p>
                  NFTs are cryptographic assets on a blockchain with unique
                  identification codes, owned by a crypto wallet, with metadata
                  that distinguishes them from each other. The variety of assets
                  is wide-ranging, but digital art was the first use case, and
                  is the most well-known and understood.{" "}
                </p>
                <p>
                  These tokens are non-fungible in the sense that they are
                  unique and cannot be interchanged like fungible assets such as
                  Bitcoin or the pound, dollar, or euro, in your pocket.{" "}
                </p>
                <p>
                  Let’s take an example to make this point clear. If you
                  exchange one Bitcoin for another, nothing changes, you still
                  get a Bitcoin back with the exact same properties it was
                  created with (*). This the same as exchanging one £10 note for
                  another. This is not the case with NFTs.{" "}
                </p>
                <p>
                  (*) There are some possible exceptions to this, but this small
                  wrinkle can be conveniently ignored for now.
                </p>
                <label className="">3. What are NFTs used for?</label>
                <p>
                  NFTs are used to indicate ownership of an asset through its
                  related metadata.
                </p>
                <p>
                  As indicated above, the most common use-case is to prove
                  ownership of digital art, which is frequently in the form of a
                  picture file stored on a server in the cloud. Increasingly
                  NFTs are used to prove ownership of in-game items, music, and
                  photography, all existing in digital format.
                </p>
                <label className="">
                  4. What can NFTs be used for in the future?
                </label>
                <p>
                  Perhaps the greatest potential for NFTs lies in the ability to
                  prove ownership of real-life, not just digital, assets.
                </p>
                <p>
                  If you own a physical piece of art – be it a painting, photo,
                  a music track etc. – and you own the copyright (a slightly
                  thorny subject to which we will return) you can mint a digital
                  representation as an NFT. Once we all own houses in the
                  metaverse, showing off one’s art collection in virtual reality
                  will become as commonplace as using social media. In fact, the
                  metaverse will be social media, though possibly not in the
                  centralised form as envisaged by Mark Zuckerberg.
                </p>
                <p>There are other uses.</p>
                <p>
                  Proving ownership of real estate assets is ripe for an NFT
                  revolution, as is the whole process of conveyancing.
                </p>
                <p>
                  Supply chain documentation, employment contracts, the vast
                  amount of contractual information that is created daily by
                  financial institutions, can all be dramatically improved with
                  blockchain and NFT technology.
                </p>
                <label className="">5. Can NFTs be copied? </label>
                <p>
                  Ownership cannot be copied, but the data stored elsewhere
                  referred to in the metadata of the NFT can be.
                </p>
                <p>
                  Take, for example, the Mona Lisa. There are many lookalikes
                  and iterations of the original painting, but there is only one
                  original Mona Lisa artwork (cue art historians correcting me
                  here). The same goes for an NFT, it’s impossible to fake the
                  owner’s wallet even though copying the contents of an NFT can
                  be done.
                </p>
                <p>
                  As an example, the first, most successful, and most well known
                  NFT collection was CryptoPunks launched for free back in 2017.
                  Anyone can view each CryptoPunk, and can take a screen shot of
                  it, as I have done below:
                  <br />
                  <br />
                  <img src={punk} className="punk" />
                  <br />
                  <br />
                  <p>
                    This is CryptoPunk 5822 which sold for 8,000 ETH, worth
                    $23.7mm at the time of sale.
                  </p>
                  <p>
                    I can copy this image, and in fact I can mint it as my own
                    NFT, but my version will be worth zilch. The blockchain
                    history of the original proves its provenance, and that
                    gives it value.
                  </p>
                </p>
                <label className="">
                  6. What is the environmental impact of NFTs?
                </label>
                <p>
                  There has been a lot of debate around this topic, some of
                  which has been based on a misunderstanding of the energy
                  requirements for blockchain technology, specifically BTC which
                  uses a PoW (Proof-of-Work) consensus mechanism.{" "}
                </p>
                <p>We will not get into that discussion today.</p>
                <p>
                  Suffice to say that our Puppies are minted using the Ethereum
                  network, which recently transitioned (so millennium darling)
                  to a PoS (Proof-of-Stake) consensus mechanism, cutting its
                  energy usage by over 99.9% at a stroke.
                </p>
                <p>
                  It seems inconceivable to me that anyone can criticise the
                  Ethereum network for excessive energy consumption, but I am
                  always keen to hear a dissenting opinion.
                </p>
                <label className="">
                  7. What’s the connection between NFTs and cryptocurrency?
                </label>
                <p>
                  NFTs aren’t cryptocurrencies, but they are built using
                  blockchain technology which keeps a record of all the
                  transactions connected to the NFT and the property it
                  represents.
                </p>
                <label className="">8. Where do I buy and sell NFTs?</label>
                <p>
                  There are many centralised NFT marketplaces, the most popular
                  and famous of which include Opensea, Rarible, and Nifty’s.
                </p>
                <p>
                  It is usually the case that the buying and selling process for
                  NFTs is conducted using cryptocurrency. We will be taking that
                  route with our puppies, specifically ETH (Ethereum). Full
                  details of how to do that are in the “Practical” FAQs with an
                  accompanying video.
                </p>
                <label className="">9. Copyright</label>
                <p>This is a thorny issue in the world of NFTs.</p>
                <p>
                  Some NFTs transfer the copyright to the buyer, some do not.
                </p>
                <p>When you buy a Nifty Puppy, you own the copyright.</p>
                <label className="">10. Rarity</label>
                <p>
                  One of the critical factors to determine the value of an NFT.
                  Each NFT has unique and different properties or traits, and
                  the rarity of individual traits or combinations of traits
                  dictate an NFT's rarity and therefore desirability, which in
                  turn drives its value. Just like most things in life, when an
                  NFT is rare, its value increases. You can use different tools
                  to check the rarity of an NFT, like rarity.tools, or Rarity
                  Sniper, or indeed OpenSea itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
