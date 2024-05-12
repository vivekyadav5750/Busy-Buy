import { orderData } from "../Assets/orderData";

export default function Order() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-2/4 flex flex-col justify-center text-center  space-y-8">
          <h1 className="text-3xl font-bold tracking-widest ">Your Orders</h1>

          <div className="flex flex-col space-y-6">
            {orderData.map((order, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <h2 className="text-xl font-semibold justify-center">
                  Order On: {order.orderDate}
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
                    {order.orderItems.map((item, index) => (
                      <tr key={index} className="border-b-2 border-white h-8 ">
                        <td className=" bg-red-200 border border-green-500 overflow-hidden border-r-2 ">
                          <div className="truncate">{item.itemName}</div>
                        </td>
                        <td className=" border-r-2 border-white">
                          {item.itemPrice}
                        </td>
                        <td className=" border-r-2 border-white">
                          {item.itemQty}
                        </td>
                        <td className=" border-r-2 border-white">
                          {item.itemPrice * item.itemQty}
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
                        {order.orderItems.reduce(
                          (acc, item) => acc + item.itemPrice * item.itemQty,
                          0
                        )}
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
