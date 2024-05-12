import ItemsCard from "../components/itemsCard";
import Filter from "../components/filter";
import SearchBar from "../components/searchBar";
// import { useValue } from "../Auth/hook";

export default function Product() {
  // const { userLogin } = useValue();
  // console.log(userLogin);
  return (
    <>
      <main className="space-y-4">
        <div className="flex w-full justify-center mt-3">
          <SearchBar />
        </div>

        <div className="flex gap-x-4">
          <div className="bg-lightPurple w-56 h-72 p-4 rounded-lg mt-10 ml-2">
            <span></span>
            <Filter />
          </div>

          <div className="w-4/5 grid grid-cols-4 gap-y-8 gap-x-4">
            <ItemsCard />
          </div>
        </div>
      </main>
    </>
  );
}
