import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <form className="flex gap-3.5 justify-between p-2 whitespace-nowrap bg-white rounded-lg border border-gray-200 border-solid text-neutral-500">
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="bg-transparent border-none outline-none"
      />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2bc8a92eee35a532eb03d9ca7809ab0a8effa3a7b8045d0d29543134150fcdd?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e" alt="" className="shrink-0 w-6 aspect-square" />
    </form>
  );
};

export default SearchBar;