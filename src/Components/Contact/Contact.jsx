import telephone from "../../../src/assets/all/banner-logo/tele-removebg-preview.png";
import Cover from "../../Pages/Shared/Cover/Cover";


const Contact = () => {
  return (
    <div>
       <Cover img="https://blog.swiggy.com/wp-content/uploads/2024/04/Rice-1024x538.jpg" title="Contact" />
         <div className="bg-gradient-to-b from-[#fff1f2] via-[#fff9f2] to-white py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Top Icon + Title */}
        <img src={telephone} alt="Old phone" className="mx-auto" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 tracking-tight">
          HELLO
        </h1>
        <p className="text-base md:text-lg text-gray-700 sm:w-auto md:w-auto lg:w-[70%] mx-auto mb-12 leading-relaxed">
          You&apos;ve got some Q&apos;s and we&apos;ve got tons of A&apos;s. Ask
          us about an order, a product, what you should name your puppy...
          anything we can help with! Don&apos;t be shy – we promise we&apos;re
          really nice.
        </p>

        {/* Contact Section */}
        <section className="flex flex-col md:flex-row items-stretch justify-between bg-white shadow-2xl rounded-3xl overflow-hidden min-h-[500px]">
          {/* Left Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-pink-100 via-white to-pink-50 p-10 md:p-14 flex flex-col justify-center">
            <p className="text-pink-600 font-semibold uppercase tracking-widest">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-snug">
              Have a question or feedback?
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-base md:text-md">
              To provide specific guidance for your question or feedback, please
              tell me who or what the feedback is for. Once you specify the
              subject, you can offer feedback about it by explaining what worked
              well or what could have been done better, or you can ask questions
              about it to seek clarification or further information.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 p-10 md:p-14 bg-white flex flex-col justify-center">
            <form className="grid grid-cols-1 gap-6">
              {/* Name */}
              <div className="flex flex-col text-start gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
                />
              </div>

              {/* Company */}
              <div className="flex text-start flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
                />
              </div>

              {/* Email */}
              <div className="flex text-start flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
                />
              </div>

              {/* Phone */}
              <div className="flex text-start flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
                />
              </div>

              {/* Subject */}
              <div className="flex  text-start flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
                />
              </div>

              {/* Message */}
              <div className="flex text-start flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Type your message..."
                  className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    </div>
  
  );
};

export default Contact;
