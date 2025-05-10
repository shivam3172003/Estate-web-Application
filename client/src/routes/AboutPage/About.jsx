import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about">
        <div className="container">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            At Real Estate Hub, we are dedicated to providing you with a
            seamless and stress-free experience when it comes to finding the
            perfect home or commercial property. With years of experience and a
            strong network of trusted partners, we are committed to delivering
            exceptional results that meet your unique needs and exceed your
            expectations. Our team of experts will work closely with you to
            understand your requirements, provide guidance throughout the
            process, and ensure that every transaction is completed with the
            utmost care and professionalism. Whether you are looking to buy,
            sell, or rent a property, you can trust that you are in good hands
            with Real Estate Hub.
          </p>

          <div className="why-choose">
            <h2 className="about__why-title">Why Choose Us?</h2>
            <div className="why-choose-grid">
              <div className="stat">
                <h3>✔ Expert Guidance</h3>
                <p>
                  We provide step-by-step assistance in buying, selling, or
                  renting properties.
                </p>
              </div>
              <div className="stat">
                <h3>✔ Wide Property Listings</h3>
                <p>
                  From luxury apartments to commercial spaces, we have it all.
                </p>
              </div>
              <div className="stat">
                <h3>✔ Trusted Network</h3>
                <p>
                  Partnered with top builders and property owners for the best
                  deals.
                </p>
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <h2>16+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h2>200+</h2>
              <p>Awards Gained</p>
            </div>
            <div className="stat">
              <h2>1200+</h2>
              <p>Properties Sold</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="about-container">
//       <section className="about">
//         <div className="container">
//           <h1>About Us</h1>
//           <p>
//             At Real Estate Hub, we are dedicated to providing you with a
//             seamless and stress-free experience when it comes to finding the
//             perfect home or commercial property. With years of experience and a
//             strong network of trusted partners, we are committed to delivering
//             exceptional results that meet your unique needs and exceed your
//             expectations. Our team of experts will work closely with you to
//             understand your requirements, provide guidance throughout the
//             process, and ensure that every transaction is completed with the
//             utmost care and professionalism. Whether you are looking to buy,
//             sell, or rent a property, you can trust that you are in good hands
//             with Real Estate Hub.
//           </p>

//           <div className="stats">
//             <h2 className="about__why-title">Why Choose Us?</h2>
//             <div className="stat">
//               <h3>✔ Expert Guidance</h3>
//               <p>
//                 We provide step-by-step assistance in buying, selling, or
//                 renting properties.
//               </p>
//             </div>
//             <div className="stat">
//               <h3>✔ Wide Property Listings</h3>
//               <p>
//                 From luxury apartments to commercial spaces, we have it all.
//               </p>
//             </div>
//             <div className="stat">
//               <h3>✔ Trusted Network</h3>
//               <p>
//                 Partnered with top builders and property owners for the best
//                 deals.
//               </p>
//             </div>
//           </div>

//           <div className="stats">
//             <div className="stat">
//               <h2>16+</h2>
//               <p>Years of Experience</p>
//             </div>
//             <div className="stat">
//               <h2>200+</h2>
//               <p>Awards Gained</p>
//             </div>
//             <div className="stat">
//               <h2>1200+</h2>
//               <p>Properties Sold</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
