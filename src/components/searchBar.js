import { HiMiniXMark } from "react-icons/hi2";
import PropTypes from "prop-types";

export default function SearchBar({searchText, setSearchText}) {
  return (
    <div className="relative flex justify-end items-center">
      <input
        className="h-12 w-80 p-3 pr-9 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
            focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
        type="text"
        placeholder="Search By Name"
        required
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
       {searchText &&
       <HiMiniXMark size={24} className="absolute z-10 right-2 cursor-pointer hover:text-red-500" onClick={()=> setSearchText("")} />
      }
    </div>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
