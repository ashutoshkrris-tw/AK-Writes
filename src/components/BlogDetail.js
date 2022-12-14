import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

function BlogDetail() {
  const { blogId } = useParams();
  const { data, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${blogId}`
  );
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blogId}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetail;
