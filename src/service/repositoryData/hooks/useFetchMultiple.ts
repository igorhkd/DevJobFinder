import { useState, useEffect } from "react";
import { RepositoryData, getRepositoryData } from "..";

export const useFetchMultiple = (urls: string[]) => {
  const [data, setData] = useState<RepositoryData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          urls.map((url) => getRepositoryData(url))
        );
        setData(results);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [urls]);

  return { data, error, loading };
};
