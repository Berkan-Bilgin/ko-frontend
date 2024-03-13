import React, { useState } from "react";
import { useAllCharacters } from "../../hooks/useCharacters";
import CharacterCard from "../../components/CharacterCard";

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useAllCharacters(page); // Örnek olarak 1. sayfayı kullanıyoruz

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1 className="text-3xl text-primary">Characters</h1>
      <input
        type="text"
        placeholder="Search Character..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full px-4 mt-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-400 "
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
          disabled={!data?.info.next}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results
          ?.filter((episode) =>
            episode.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>
    </div>
  );
};

export default CharactersPage;
