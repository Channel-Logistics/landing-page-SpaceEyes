import { FileText, Mail, MapPinCheck, PhoneCall } from "lucide-react";
import type React from "react";

const background = "/images/slider/main-video.webp";

const ContactUs: React.FC = () => {
  return (
      <div
        className="relative w-full min-h-screen text-contact-us-text px-6 pt-24 pb-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >

        <div className="max-w-7xl mx-auto mb-8 flex items-center gap-6">
          <div className="bg-contact-us-background p-5 rounded-3xl flex items-center justify-center">
            <FileText className="w-10 h-10 text-contact-us-text" />
          </div>
          <h1 className="text-3xl font-semibold text-contact-us-text tracking-wider">Contact Us</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-20 max-w-7xl mx-auto w-full min-h-screen items-stretch">
          <div className="flex-1 bg-transparent border-4 border-contact-us-border rounded-3xl p-10 shadow-lg flex flex-col min-h-[600px]">
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-contact-us-text">SEND US MESSAGE</h2>
              <form className="space-y-6 flex-1 flex flex-col justify-between">

                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col w-full md:w-62">
                    <label className="text-contact-us-text text-md mb-1">Your Name</label>
                    <input
                      type="text"
                      className="backdrop-blur-md bg-contact-us-fields-background border-2 border-contact-us-fields-border rounded-2xl p-3 text-sm focus:outline-none focus:border-contact-us-border"
                    />
                  </div>

                  <div className="flex flex-col w-full md:w-62">
                    <label className="text-contact-us-text text-md mb-1">Country</label>
                    <select
                      className="backdrop-blur-md bg-contact-us-fields-background border-2 border-contact-us-fields-border rounded-2xl p-3 text-sm text-contact-us-text focus:outline-none focus:border-contact-us-border"
                    >
                      <option value="Colombia">Colombia</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col w-full md:w-62">
                    <label className="text-contact-us-text text-md mb-1">Company</label>
                    <input
                      type="text"
                      className="backdrop-blur-md bg-contact-us-fields-background border-2 border-contact-us-fields-border rounded-2xl p-3 text-sm focus:outline-none focus:border-contact-us-border"
                    />
                  </div>

                  <div className="flex flex-col  w-full md:w-62">
                    <label className="text-contact-us-text text-md mb-1">Your Email</label>
                    <input
                      type="email"
                      className="backdrop-blur-md bg-contact-us-fields-background border-2 border-contact-us-fields-border rounded-2xl p-3 text-sm focus:outline-none focus:border-contact-us-border"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-contact-us-text text-md mb-1">Your Phone</label>
                  <input
                    type="text"
                    className="backdrop-blur-md bg-contact-us-fields-background border-2 border-contact-us-fields-border rounded-2xl p-3 text-sm focus:outline-none focus:border-contact-us-border"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-contact-us-text text-md mb-1">How can we help?</label>
                  <input
                    type="text"
                    className="backdrop-blur-md bg-contact-us-fields-background border-2 border-contact-us-fields-border rounded-2xl p-3 text-sm focus:outline-none focus:border-contact-us-border"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-contact-us-text text-md mb-1">More details</label>
                  <textarea
                    placeholder="Tell us more about your project, goals, and how we can help you achieve them..."
                    className="w-full backdrop-blur-md bg-contact-us-fields-background border-2 border-contact-us-fields-border placeholder-contact-us-text rounded-2xl p-3 text-sm focus:outline-none focus:border-contact-us-border min-h-[180px] mb-4"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-contact-us-background border border-contact-us-border rounded-2xl py-3 text-contact-us-text text-2xl transition-all"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 bg-contact-us-background border border-contact-us-fields-border rounded-2xl p-10 shadow-lg flex flex-col justify-between min-h-[600px]">
            <div>
              <h2 className="text-3xl font-semibold mb-8 text-contact-us-text">CONTACT INFO</h2>
              <div className="space-y-6 text-sm text-contact-us-text">
                <div>
                  <p className="text-xl font-semibold text-contact-us-text tracking-wide mb-2">ADDRESS:</p>
                  <div className="flex items-center gap-2 text-contact-us-text mb-12">
                    <MapPinCheck className="w-5 h-5" />
                    <p className="font-semibold">888 Biscayne Blvd. Suite 505, Miami, FL 33132, USA</p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold text-contact-us-text tracking-wide mb-2">PHONE:</p>
                  <div className="flex items-center gap-2 text-contact-us-text mb-12">
                    <PhoneCall className="w-5 h-5" />
                    <p className="font-semibold ">+1 856 614 5441</p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold text-contact-us-text tracking-wide mb-2">EMAIL:</p>
                  <div className="flex items-center gap-2 text-contact-us-text mb-12">
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

export default ContactUs;
