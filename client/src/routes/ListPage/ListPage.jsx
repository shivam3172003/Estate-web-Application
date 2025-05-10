import React, { Suspense } from "react";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card.jsx";
import Map from "../../components/Map/Map.jsx";
import "./ListPage.css";
import { Await, useLoaderData } from "react-router-dom";
function ListPage() {
  const data = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => {
                console.log("Posts received:", postResponse); // Updated console log

                if (!postResponse || postResponse.length === 0) {
                  return <p>No posts found.</p>;
                }

                return postResponse.map((post) => (
                  <Card key={post.id} item={post} />
                ));
              }}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}


export default ListPage;
