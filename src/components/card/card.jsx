import React, { useState, useEffect } from 'react';
import './card.css';
import img1 from '../JPEG/1.jpeg';
import img2 from '../JPEG/2.png';
import img3 from '../JPEG/3.jpeg';
import img4 from '../JPEG/4.png';
import img5 from '../JPEG/5.png';
import img6 from '../JPEG/6.jpeg';
import img7 from '../JPEG/7.jpeg';
import img8 from '../JPEG/8.png';
import img9 from '../JPEG/9.png';
import img10 from '../JPEG/10.png';
import img11 from '../Assets/11.png';
import img12 from '../Assets/12.png';
import img13 from '../Assets/13.png';
import img14 from '../Assets/14.png';
import img15 from '../Assets/15.png';
import img16 from '../Assets/16.png';
import img17 from '../Assets/17.png';
import img18 from '../Assets/18.png';
import img19 from '../Assets/19.png';
import img20 from '../Assets/20.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const images2 = [img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

export default function Card() {
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(images[0]);

  useEffect(() => {
    setImg(images[index]);
  }, [index]);

  const incrementIndex = () => {
    setIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const decrementIndex = () => {
    setIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="container">
        <div className="left">
          {images2.map((image, i) => (
            <img
              key={i}
              className={`imgLeft ${img === images[i] ? 'currentImage' : ''}`}
              src={image}
              alt=""
              onMouseOver={() => setImg(images[i])}
            />
          ))}
        </div>
        <div className="right">
        <button onClick={incrementIndex} className='arwRight'>
        &gt;
          </button>
          <button onClick={decrementIndex} className='arwLeft'>
         &lt;
          </button>
         
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
