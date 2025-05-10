import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage.jsx";
import ListPage from "./routes/ListPage/ListPage.jsx";
import ProfilePage from "./routes/ProfilePage/ProfilePage.jsx";
import Register from "./routes/Register/Register.jsx";
import { Layout, RequireAuth } from "./routes/Layout/Layout.jsx";
import Login from "./routes/Login/Login.jsx";
import SinglePage from "./routes/SinglePage/SinglePage.jsx";
import About from "./routes/AboutPage/About.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage.jsx";
import NewPostPage from "./routes/NewPostPage/NewPostPage.jsx";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders.js";

// Create router
const router = createBrowserRouter([
  {
    // Home route
    path: "/",
    element: <Layout />,
    children: [
      // Home page
      { index: true, element: <HomePage /> },
      // About page
      { path: "about", element: <About /> },
      // Contact page
      { path: "contact", element: <Contact /> },
      // List page
      { path: "list", element: <ListPage />, loader: listPageLoader },
      // Single page
      { path: ":id", element: <SinglePage />, loader: singlePageLoader },
      // Login page
      { path: "login", element: <Login /> },
      // Register page
      { path: "register", element: <Register /> },
      // 404 page
      { path: "*", element: <h1>Not Found</h1> },
    ],
  },
  {
    // Protected routes
    element: <RequireAuth />,
    children: [
      // Profile page
      { path: "profile", element: <ProfilePage />, loader: profilePageLoader },
      // Profile update page
      { path: "profile/update", element: <ProfileUpdatePage /> },
      // New post page
      { path: "profile/newPost", element: <NewPostPage /> },
    ],
  },
]);

// App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;

