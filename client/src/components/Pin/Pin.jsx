import { Marker, Popup } from "react-leaflet";
import "./Pin.css";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>₹{item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;

// import { Marker, Popup } from "react-leaflet";
// import "./Pin.css";
// import { Link } from "react-router-dom";

// function Pin({ item }) {
//   if (!item.latitude || !item.longitude) return null; // ✅ Prevent errors

//   return (
//     <Marker position={[item.latitude, item.longitude]}>
//       <Popup>
//         <div className="popupContainer">
//           <img src={item.img} alt="" />
//           <div className="textContainer">
//             <Link to={`/${item.id}`}>{item.title}</Link>
//             <span>{item.bedroom} bedroom</span>
//             <b>$ {item.price}</b>
//           </div>
//         </div>
//       </Popup>
//     </Marker>
//   );
// }

// export default Pin;
