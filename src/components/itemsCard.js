import { data } from "../Assets/productData.js";
export default function ItemsCard() {
  return (
    <>
      {/* <div> */}
      {data.map((product) => (
        <div
          className="custom-card-shadow w-full rounded-md flex flex-col p-4 gap-y-2 justify-between"
          key={product.id}
        >
          <div className="space-y-2">
            <img
              className="w-60 h-60 rounded-sm"
              src={product.image}
              alt={product.category}
            />

            <p className="line-clamp-2">{product.name}</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold">{product.price}</p>

            <button className="h-10 w-full p-1.5 bg-darkPurple text-lg text-white rounded-md shadow-lg shadow-slate-400 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      {/* </div> */}
    </>
  );
}
