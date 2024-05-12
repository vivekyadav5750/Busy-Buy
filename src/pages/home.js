import CustomItemContext from "../Auth/hook";
import Product from "./product";
import Navbar from "../components/navbar";

export default function HomePage() {
   
  return (
    <CustomItemContext>
        {/* <Navbar/> */}
        <Product />
    </CustomItemContext>
  );
}

// export default function HomePage() {
//     return (
//        <>
//         <Product />
//        </>
//     )
// }
