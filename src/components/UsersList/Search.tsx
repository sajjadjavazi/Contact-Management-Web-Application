import { useState } from "react";

interface SearchProps {
  onSearch: (value: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    onSearch(inputValue);
  };

  return (
    <div>
      <input
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-neutral-200 px-6 py-3 rounded-r-lg"
        placeholder="مخاطب خود را پیدا کنید!"
        aria-label="Search"
        aria-describedby="button-addon3"
      />
      <button
        onClick={handleButtonClick}
        className="bg-stone-400 hover:bg-stone-500 px-6 py-3 rounded-l-lg"
        data-twe-ripple-init
        data-twe-ripple-color="white"
        type="button"
        id="button-addon3"
      >
        جستجو
      </button>
    </div>
  );
};

export default Search;
