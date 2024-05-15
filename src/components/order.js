import { orderData } from "../Assets/orderData";
import { useContext } from "react";
import userContext from "../context/user/userContext";

export default function Order() {
  const { purchaseHistory, setPurchaseHistory } = useContext(userContext);
  console.log(purchaseHistory);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/4 flex flex-col justify-center text-center  space-y-8">
          <h1 className="text-3xl font-bold tracking-widest ">Your Orders</h1>

          <div className="flex flex-col space-y-6">
            {purchaseHistory.map((order, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <h2 className="text-xl font-semibold justify-center">
                  Order On: {order.date}
                </h2>

                {/* create table with head col are title  price   quantity and total price */}
                <table className="w-full table-auto bg-gray-100 rounded-sm ">
                  <thead>
                    <tr className="border-b-2 border-black tracking-widest h-10  ">
                      <th className="w-1/2">Title</th>
                      <th className="w-1/6">Price</th>
                      <th className="w-1/6">Quantity</th>
                      <th className="w-1/6">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, index) => (
                      <tr key={index} className="border-b-2 border-white h-8 ">
                        <td className=" bg-red-200 border border-green-500 overflow-hidden border-r-2 ">
                          <div className="truncate">{item.name}</div>
                        </td>
                        <td className=" border-r-2 border-white">
                          {item.price}
                        </td>
                        <td className=" border-r-2 border-white">
                          {item.quantity}
                        </td>
                        <td className=" border-r-2 border-white">
                          {item.price * item.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* total of price */}
                  <tfoot>
                    <tr className="h-9 ">
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>
                        {order.items.reduce(
                          (acc, item) => acc + item.price * item.quantity, 0)
                        }
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
