import React from "react";
import { useEpisodes } from "../../hooks/useEpisodes";
import { Link } from "react-router-dom";

const Home = () => {
  const [page, setPage] = React.useState(1);

  const { data, error, isLoading, isFetching } = useEpisodes(page);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div>
      <h1>Episodes</h1>
      <ul>
        {data?.results.map((episode) => (
          <li key={episode.id}>
            <Link
              to={`/episodes/${encodeURIComponent(
                episode.name.replace(/\s+/g, "-")
              )}`}
              state={{ id: episode.id }}
            >
              {episode.id}-{episode.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span> Page {page} </span>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={!data?.info.next}
        >
          Next
        </button>
      </div>
      {isFetching && <p>Updating...</p>}
    </div>
  );
};

export default Home;
