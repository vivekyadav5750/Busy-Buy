import Order from "../components/order";
import  {orderData}  from "../Assets/orderData";

export default function MyOrder() {
  return (
    <>
        {/* check length of orderdata is equal to 0 return no order or retun Order components */}
        {orderData.length === 0 ? (
          <h1 className="text-4xl font-bold tracking-widest text-center mt-2">
            No Orders
          </h1>
        ) : (
          <Order />
        )}
    </>
  );
}
