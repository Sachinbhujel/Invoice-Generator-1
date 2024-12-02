import { AsyncPaginate } from "react-select-async-paginate";

const Search = () => {
  return <AsyncPaginate placeholder="Search for City" debounceTimeOut={600}
   />;
};

export default Search;
