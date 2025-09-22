import { FaPhoneAlt } from "react-icons/fa";

const CallUs = () => {
  return (
    <section className="relative mt-10 sm:px-4 lg:px-0 md:px-2 container mx-auto">
      {/* Background with overlay */}
      <div className="h-[280px] w-full bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center rounded-xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
          {/* Glassmorphism card */}
          <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg border border-white/20 max-w-xl w-full">
            {/* Title + Icon */}
            <div className="flex justify-center items-center gap-3 mb-4">
              <FaPhoneAlt className="text-3xl md:text-4xl text-yellow-400" />
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide">
                Call Us Anytime
              </h2>
            </div>

            {/* Phone Number */}
            <p className="text-lg md:text-2xl font-medium mb-6">
              +88 0192345678910
            </p>

            {/* Call Now Button */}
            <a
              href="tel:+880192345678910"
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallUs;
