// import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import "./ProfilePage.css";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Suspense, useContext } from "react";

function ProfilePage() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      localStorage.removeItem("user"); 
      updateUser(null); 
      navigate("/login"); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button
              onClick={() => {
                window.location.href = "/profile/update";
              }}
            >
              Update Profile
            </button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser?.avatar || "/noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser?.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser?.email}</b>
            </span>
            <button onClick={handleLogout}>Log Out</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button
              onClick={() => {
                window.location.href = "/profile/newPost";
              }}
            >
              Create New Post
            </button>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
      {/* <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div> */}
    </div>
  );
}

export default ProfilePage;
