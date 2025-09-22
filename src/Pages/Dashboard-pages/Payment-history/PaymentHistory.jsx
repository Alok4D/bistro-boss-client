import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">💳 Payment History</h2>
        <p className="text-gray-500">Total Payments: <span className="text-[#ff5200] font-semibold">{payments.length}</span></p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-[#ff5200] text-white text-left">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Transaction ID</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((payment, index) => (
              <tr key={payment._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4 text-[#ff5200] font-semibold">${payment.price.toFixed(2)}</td>
                <td className="px-6 py-4 font-mono text-sm text-gray-700">{payment.transactionId}</td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
            {payments.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500 font-medium">
                  No payment records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
