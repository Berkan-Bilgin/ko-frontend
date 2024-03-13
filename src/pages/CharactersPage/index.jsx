import React, { useState } from "react";
import { useAllCharacters } from "../../hooks/useCharacters";
import CharacterCard from "../../components/CharacterCard";

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useAllCharacters(page); // Örnek olarak 1. sayfayı kullanıyoruz

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Characters</h1>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
