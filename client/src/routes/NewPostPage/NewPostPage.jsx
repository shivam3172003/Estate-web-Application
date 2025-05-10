import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import "./NewPostPage.css";
// import { RichTextEditor } from "@mantine/rte";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function NewPostPage() {
  const [value, setValue] = useState(""); // Rich text editor content
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    const token = localStorage.getItem("token"); // ✅ Get token

    const postData = {
      title: inputs.title,
      price: parseInt(inputs.price),
      address: inputs.address,
      city: inputs.city,
      bedroom: parseInt(inputs.bedroom),
      bathroom: parseInt(inputs.bathroom),
      type: inputs.type,
      property: inputs.property,
      latitude: inputs.latitude,
      longitude: inputs.longitude,
      images: images,
    };

    const postDetail = {
      desc: value,
      utilities: inputs.utilities || null,
      pet: inputs.pet || null,
      income: inputs.income || null,
      size: parseInt(inputs.size) || null,
      school: parseInt(inputs.school) || null,
      bus: parseInt(inputs.bus) || null,
      restaurant: parseInt(inputs.restaurant) || null,
    };

    console.log("Sending postData:", postData);
    console.log("Sending postDetail:", postDetail);

    try {
      const res = await apiRequest.post(
        "/posts",
        { postData, postDetail },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      navigate("/" + res.data.id);
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                name="desc"
                rows="16"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter description..."
              />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                required
              />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                required
              />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" required>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select name="property" required>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" required>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" required>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input min={0} id="bus" name="bus" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                required
              />
            </div>
            <button className="sendButton">Add</button>
            {error && <span className="error">{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="avatar"
          />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "manby",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
