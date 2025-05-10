import { useState } from "react";
import "./Slider.css";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="slider">
      {isOpen && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="Left Arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt={`Slide ${imageIndex}`} />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" alt="Right Arrow" />
          </div>
          <div className="close" onClick={() => setIsOpen(false)}>
            X
          </div>
        </div>
      )}
      <div
        className="bigImage"
        onClick={() => {
          setImageIndex(0);
          setIsOpen(true);
        }}
      >
        <img src={images[0]} alt="Main" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            key={index}
            onClick={() => {
              setImageIndex(index + 1);
              setIsOpen(true);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

// import { useState } from "react";
// import "./Slider.css";

// function Slider({ images }) {
//   const [imageIndex, setImageIndex] = useState(null);

//   const changeSlide = (direction) => {
//     if (direction === "left") {
//       if (imageIndex === 0) {
//         setImageIndex(images.length - 1);
//       } else {
//         setImageIndex(imageIndex - 1);
//       }
//     } else {
//       if (imageIndex === images.length - 1) {
//         setImageIndex(0);
//       } else {
//         setImageIndex(imageIndex + 1);
//       }
//     }
//   };

//   return (
//     <div className="slider">
//       {imageIndex !== null && (
//         <div className="fullSlider">
//           <div className="arrow" onClick={() => changeSlide("left")}>
//             <img src="/arrow.png" alt="" />
//           </div>
//           <div className="imgContainer">
//             <img src={images[imageIndex]} alt="" />
//           </div>
//           <div className="arrow" onClick={() => changeSlide("right")}>
//             <img src="/arrow.png" className="right" alt="" />
//           </div>
//           <div className="close" onClick={() => setImageIndex(null)}>
//             X
//           </div>
//         </div>
//       )}
//       <div className="bigImage">
//         <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
//       </div>
//       <div className="smallImages">
//         {images.slice(1).map((image, index) => (
//           <img
//             src={image}
//             alt=""
//             key={index}
//             onClick={() => setImageIndex(index + 1)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;
