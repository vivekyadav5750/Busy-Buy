export default function SearchBar() {
  return (
    <>
      <input
        className="h-12 w-80 p-3 bg-shadowWhite box-border border-2 border-darkPurple rounded-lg text-lg text-darkPurple font-semibold 
            focus:outline-none focus:border-darkPurple-500 focus:ring-1 focus:ring-darkPurple-500 placeholder:text-lg placeholder:font-normal"
        type="text"
        placeholder="Search By Name"
        required
        autoComplete="off"
      />
    </>
  );
}
