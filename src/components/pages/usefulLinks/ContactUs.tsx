// ContactUs.tsx
import React from "react";
import { FileText, Mail, MapPinCheck, PhoneCall } from "lucide-react";

export default function ContactUs() {
  return (
    <div
      className="relative w-full min-h-screen text-white px-6 pt-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/slider/main-video.webp')" }}
    >
      {/* 🔹 Fondo oscuro semitransparente */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10"></div>

      {/* 🔹 Encabezado "Contact Us" */}
      <div className="max-w-7xl mx-auto mb-4 flex items-center gap-8">
        <div className="bg-[#25252C]/[0.92] p-5 rounded-3xl flex items-center justify-center border-3 border-white">
          <FileText className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-semibold text-white tracking-wider">Contact Us</h1>
      </div>


      {/* 🔹 Contenedor principal */}
      <div className="flex flex-col md:flex-row gap-20 max-w-7xl mx-auto w-full h-[80vh] items-stretch">
        {/* 📨 Formulario */}
        <div className="flex-1 bg-transparent border-4 border-white rounded-3xl p-10 shadow-lg flex flex-col min-h-[600px]">
          <div>
            <h2 className="text-3xl font-semibold mb-12 text-white">SEND US MESSAGE</h2>
            <form className="space-y-6 flex-1 flex flex-col justify-between">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-white text-md mb-1">Your Name</label>
                  <input
                    type="text"
                    className="backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-3 text-sm placeholder-gray-300 focus:outline-none focus:border-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white text-md mb-1">Country</label>
                  <select
                    className="backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-3 text-sm text-gray-200 focus:outline-none focus:border-white"
                  >
                    <option value="Colombia" className="text-black">Colombia</option>
                    <option value="USA" className="text-black">USA</option>
                    <option value="Spain" className="text-black">Spain</option>
                  </select>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-white text-md mb-1">Company</label>
                  <input
                    type="text"
                    className="backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-3 text-sm placeholder-gray-300 focus:outline-none focus:border-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white text-md mb-1">Your Email</label>
                  <input
                    type="email"
                    className="backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-3 text-sm placeholder-gray-300 focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-white text-md mb-1">Your Phone</label>
                <input
                  type="text"
                  className="backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-3 text-sm placeholder-gray-300 focus:outline-none focus:border-white"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-white text-md mb-1">How can we help?</label>
                <input
                  type="text"
                  className="backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-3 text-sm placeholder-gray-300 focus:outline-none focus:border-white"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-white text-md mb-1">More details</label>
                <textarea
                  placeholder="Tell us more about your project, goals, and how we can help you achieve them..."
                  className="w-full backdrop-blur-md bg-white/10 border-2 border-white/30 rounded-2xl p-3 text-sm placeholder-gray-300 focus:outline-none focus:border-white min-h-[180px] mb-4"></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#25252C]/[0.92] border border-white rounded-3xl py-3 text-white text-2xl hover:bg-white/30 transition-all"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>

        {/* 📞 Contact Info */}
        <div className="flex-1 bg-[#25252C]/[0.92] border border-white/20 rounded-2xl p-10 shadow-lg flex flex-col justify-between min-h-[600px]">
          <div>
            <h2 className="text-3xl font-semibold mb-12 text-white">CONTACT INFO</h2>
            <div className="space-y-6 text-sm text-gray-200">
              <div>
                <p className="text-xl font-semibold text-white tracking-wide mb-2">ADDRESS:</p>
                <div className="flex items-center gap-2 text-white mb-12">
                  <MapPinCheck className="w-5 h-5" />
                  <p className="font-semibold">888 Biscayne Blvd. Suite 505, Miami, FL 33132, USA</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold text-white tracking-wide mb-2">PHONE:</p>
                <div className="flex items-center gap-2 text-white mb-12">
                  <PhoneCall className="w-5 h-5" />
                  <p className="font-semibold ">+1 856 614 5441</p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold text-white tracking-wide mb-2">EMAIL:</p>
                <div className="flex items-center gap-2 text-white mb-12">
                  <Mail className="w-5 h-5" />
                  <p className="font-semibold">Support@Space-Eyes.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
