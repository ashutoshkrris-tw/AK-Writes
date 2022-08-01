import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page could not be found</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default NotFound;
