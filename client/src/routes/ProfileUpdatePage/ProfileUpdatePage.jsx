import { useContext, useState } from "react";
import "./ProfileUpdatePage.css";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const [error, setError] = useState("");
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const { username, email, password } = data;

    try {
      if (!password.trim()) {
        delete data.password;
      }

      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });

      updateUser(res.data);
      navigate("/profile");
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter new password"
            />
          </div>
          <button type="submit">Update</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0]|| currentUser.avatar|| "/noavatar.jpg"} alt="Avatar" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "manby", // Ensure this is your actual Cloudinary cloud name
            uploadPreset: "estate", // Ensure this preset exists in Cloudinary settings
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setAvatar={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
