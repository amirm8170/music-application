import SearchBox from "./search-box/SearchBox";
import "./Search.scss";

const Search = () => {
  return (
    <section className="search-container">
      <h2 className="search-title">Browse all</h2>
      <div className="search-box-container">
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
        <SearchBox/>
      </div>
    </section>
  );
};

export default Search;
