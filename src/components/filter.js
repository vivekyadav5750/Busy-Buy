export default function Filter({ price, setPrice, category, setCategory}) {

  const handleCheckboxes = (e) => {
    // console.log(e.target.);
    // console.log(e.target.value);
    if (e.target.checked) {
      setCategory([...category, e.target.value]);
    } else {
      setCategory(category.filter((item) => item !== e.target.value));
    }
    // console.log(category);
    // console.log(price);
  }

  return (
    <>
      <div className="p-1 text-center space-y-2">
        <h2 className="flex font-serif font-semibold text-xl justify-center tracking-widest">
          Filter
        </h2>

        <form className="space-y-2" >
          <label className="text-base tracking-tight" htmlFor="price">
            Price: {price} 
          </label>
          <input type="range" 
            min="100" 
            max="50000" 
            step='100'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <h2 className="font-semibold text-lg">Category</h2>

          <div className="flex flex-col justify-center items-start tracking-tight ">
            <span></span>
            <div className="space-x-2">
              <input type="checkbox"  value="men" onClick={(e) => handleCheckboxes(e)} />
              <label htmlFor="mensFashion">Men's Clothing</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox"  value="women" onClick={(e) => handleCheckboxes(e)} />
              <label htmlFor="womensFashion">Women's Clothing</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox"  value="jewellery" onClick={(e) => handleCheckboxes(e)} />
              <label htmlFor="jewelery">Jewelery</label>
            </div>
            <div className="space-x-2">
              <input type="checkbox"  value="electric"onClick={(e) => handleCheckboxes(e)} />
              <label htmlFor="electronics">Electronics</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
