import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
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
        if (error.name === "AbortError") console.log("Fetch aborted");
        else {
          setError(error.message);
          setisPending(false);
        }
      });
    return () => abortController.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
