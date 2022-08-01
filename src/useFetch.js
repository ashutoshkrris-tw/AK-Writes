import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Unable to fetch data from the server");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setisPending(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setisPending(false);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
