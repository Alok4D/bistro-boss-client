import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <SectionTitle heading="Payment" subHeading="Please pay to eat" />
        <p className="text-gray-600 mt-2">
          Complete your payment securely to confirm your order.
        </p>
      </div>

      {/* Payment Card */}
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12">
        <h3 className="text-xl font-semibold mb-6 text-center text-[#ff5200]">
          Enter your card details below
        </h3>

        {/* Stripe Elements Form */}
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
