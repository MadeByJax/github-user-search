import React from "react";
import { useState } from "react";
import "./Theme.css";
const Search = ({ fetchGithubUser, error, setError, theme }) => {
  const [searchedUser, setSearchedUser] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchGithubUser(searchedUser);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={`shadow-app gap-2 bg-white dark:bg-app-grey-3 flex p-4  items-center mt-10 rounded-lg ${theme}`}
    >
      <svg
        className="md:ml-4"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
          fill="#0079ff"
        />
      </svg>

      <input
        className="placeholder-app-grey-2 caret-app-primary md:ml-4 outline-none text-app-grey-5 dark:text-white flex-auto bg-transparent text-xs md:text-lg w-1"
        type="text"
        placeholder="Search Github username..."
        onClick={() => {
          setError();
        }}
        onChange={(e) => {
          setSearchedUser(e.target.value);
        }}
      />
      {error && <p className="text-xs text-app-red mr-4">No results</p>}
      <button className="flex items-center text-s text-white bg-app-primary hover:bg-app-primary-hover px-4 py-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default Search;
