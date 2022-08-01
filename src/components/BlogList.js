import { Link } from "react-router-dom";

function BlogList({ blogs, title, handleDelete }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className="blog-link">
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogList;
