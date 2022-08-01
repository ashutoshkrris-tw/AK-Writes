// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id) => {};

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {data && (
        <BlogList blogs={data} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default Home;
