import React, { useState } from "react";
import { useEpisodes } from "../../hooks/useEpisodes";
import { Link } from "react-router-dom";

const Home = () => {
  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data = { results: [] },
    error,
    isLoading,
    isFetching,
  } = useEpisodes(page);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div>
      <h1 className="text-primary text-3xl">Episodes</h1>

      <input
        type="text"
        placeholder="Search episodes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full px-4 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-blue-500"
      />
      <div className="flex items-center justify-center space-x-4 my-4">
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          Previous
        </button>
        <span className="text-lg inline-flex items-center justify-center h-8 w-8 bg-blue-100 text-blue-800 rounded-full ">
          {page}
        </span>

        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={!data?.info?.next}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          Next
        </button>
      </div>

      <ul className="bg-green-400 rounded-xl p-4 bg-opacity-70 grid sm:grid-cols-2 gap-2">
        {data.results
          ?.filter((episode) =>
            episode.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((episode) => (
            <li key={episode.id} className="mb-2">
              <Link
                to={`/episodes/${encodeURIComponent(
                  episode.name.replace(/\s+/g, "-")
                )}`}
                state={{ id: episode.id }}
                className="text-secondary text-xl p-2  hover:text-white transition-colors duration-200"
              >
                {episode.id}- {episode.name}
              </Link>
            </li>
          ))}
      </ul>

      {isFetching && <p>Updating...</p>}
    </div>
  );
};

export default Home;
