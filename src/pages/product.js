import ItemsCard from "../components/itemsCard";
import Filter from "../components/filter";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import Loader from "../components/Loader";

export default function Product() {
  const [searchText, setSearchText] = useState("");
  const [price, setPrice] = useState(50000);
  const [category, setCategory] = useState([]);

   // loading status by default true
   const [isLoading,setLoading]=useState(true);
   // after 2 seconds set loading status to false
   setTimeout(()=>{
     setLoading(false);
   },1000);
  
  return (
    <>
      
      {isLoading ? <Loader/> :
      <main className="space-y-4">
        <div className="flex w-full justify-center mt-3">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>

        <div className="flex gap-x-4">
          <div className="bg-lightPurple w-56 h-72 p-4 rounded-lg mt-10 ml-2">
            <span></span>
            <Filter price={price} setPrice={setPrice} category={category} setCategory={setCategory} />
          </div>

          <div className="w-4/5 grid grid-cols-4 gap-y-8 gap-x-4">
            <ItemsCard searchText={searchText} price={price} category={category} />
          </div>
        </div>
      </main>
      }
    </>
  );
}
