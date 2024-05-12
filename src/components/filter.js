export default function Filter() {
  return (
    <>
      <div className="p-1 text-center space-y-2">
        <h2 className="flex font-serif font-semibold text-xl justify-center tracking-widest">
          Filter
        </h2>

        <form className="space-y-2">
          <label className="text-base tracking-tight" htmlFor="price">
            Price: 75000 {/* dynamic state*/}
          </label>
          <input
            type="range"
            id="price"
            name="price"
            min="1"
            max="100000"
            className="bg-darkPurple rounded-lg cursor-pointer h-1.5 w-4/5"
            step="10"
          />

          <h2 className="font-semibold text-lg">Category</h2>

          <div className="flex flex-col justify-center items-start tracking-tight ">
            <span></span>
            <div className="space-x-2">
              <input type="checkbox" id="mensFashion" name="mensFashion" />
              <label htmlFor="mensFashion">Men's Clothing</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox" id="womensFashion" name="womensFashion" />
              <label htmlFor="womensFashion">Women's Clothing</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox" id="jewelery" name="jewelery" />
              <label htmlFor="jewelery">Jewelery</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox" id="electronics" name="electronics" />
              <label htmlFor="electronics">Electronics</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
