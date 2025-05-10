// import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  if (!res || !res.data) {
    throw new Error("Post not found");
  }
  return res.data;
};

export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];
  const res = await apiRequest(`/posts?${query}`);

  console.log("API Response:", res.data);

  return { postResponse: res.data };
};

export const profilePageLoader = async () => {
  const postResponse = await apiRequest("/users/profilePosts");

  console.log("API Response:", profilePageLoader.data); 

  return { postResponse: postResponse };
};

// export const profilePageLoader = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     const postResponse = await apiRequest("/users/profilePosts", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       withCredentials: true,
//     });

//     console.log("Profile Posts:", postResponse.data); // ✅ Correct log

//     return { postResponse: postResponse.data };
//   } catch (error) {
//     console.error(
//       "Error fetching profile posts:",
//       error.response?.data?.message || error.message
//     );
//     throw new Error("Failed to load profile posts.");
//   }
// };
