const Search = () => {
  return (
    <div>
      <input
        type="search"
        className="bg-neutral-200 px-6 py-3 rounded-r-lg"
        placeholder="مخاطب خود را پیدا کنید!"
        aria-label="Search"
        aria-describedby="button-addon3"
      />
      <button
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
