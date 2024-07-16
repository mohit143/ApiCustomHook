import { useState, useEffect } from "react";
import axios from "axios";

const useRequest = ({ url, method }) => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url]);

  return { response, error, loading };
};

export default useRequest;
