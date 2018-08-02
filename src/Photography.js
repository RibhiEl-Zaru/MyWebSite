import React, {Component} from 'react';
import './App.css';
import doggo from "../public/photos/CutestDogInLand.JPG";
import hayaSophia from "../public/photos/HayaSophia.JPG";
import mosque from "../public/photos/Me&BlueMosque.JPG";
import nablus from "../public/photos/Nablus.JPG";
import Sunset from "../public/photos/Sunset.JPG";
import kid from "../public/photos/PetraKid.JPG";
import flower from "../public/photos/FlowerShot.JPG";
import march from "../public/photos/DCMarch.JPG";
import protest from "../public/photos/ProtestShot.JPG";
import inaug from "../public/photos/TrumpInaug.JPG";

var fs = require('fs');
var path = "../public/photos/"

import {Carousel} from 'react-bootstrap';
class Photography extends Component {

  render() {
    return (<div >
      <div className="Center">
        <h1>
          Photography
        </h1>
      </div>
      <br/>
      <div className="textChunk">

        &nbsp;&nbsp;I, like many people, have a great love for photography. Documenting the special moments of our lives, whether they be monumental or simple, is probably why 80% of Apple customers pay that extra buck for extra iCloud storage, and give us reminders of the times we reflect happily on. For this reason, my first large adult purchase was the best camera in the world, my Nikon. A purchase that has paid for itself and then some. Below I show off some of my favorite shots using the sweet Carousel tool from React-Bootstrap. Hope you like the shots as much as I do!
        <br/>
        <br/>

        <Carousel >
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={doggo}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}>Cutest Doggo in the Land</h3>
              <p>A pic of a street dog I found in Istanbul. Often used as my computer background, this reminds me that the most beautiful things are oft found in unflattering places.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={hayaSophia}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}>Haya Sophia</h3>
              <p>Picture of the Haya Sophia's interior. Conveniently of the side that wasn't covered by scaffolding when I went there.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={mosque}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}>Me in front of the Blue Mosque</h3>
              <p ></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={nablus}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "black"
                }}>Shot of Nablus, Palestine</h3>
              <p>Nablus is the city my mother grew up in, and one of the many that I consider home.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={Sunset}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}>Wadi Rum Sunset</h3>
              <p>Still struggling to find a more beautiful place in the world.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={kid}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}>Bedouin Child in Petra</h3>
              <p>A kid I met who begged me to take a series of pictures of him sliding down this natural slide. I have not spoken to him in years but I imagine we are still friends.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={flower}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}>Flower in my backyard</h3>
              <p>The first picture I took with my Nikon that made me say #greatPurchase.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={inaug}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}>Picture from Trump Inauguration</h3>
              <p>
                After Elizabeth Warren answered my request to get a ticket to Donald Trump's Inauguration, I had to document what would become one of the most contentious moments in our nation's history.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={protest}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}>Women's March
              </h3>
              <p>Picture of the Women's March expressing their freedom of speech the day after previously mentioned Inauguration. Thought the contrast between the two scenes is very telling.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={march}/>
            <Carousel.Caption>
              <h3 style={{
                  color: "white"
                }}></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
      <br/>
      <br/>

    </div>)
  }

}

export default Photography
