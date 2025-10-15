import { FileText, Mail, MapPinCheck, PhoneCall } from "lucide-react";
import type React from "react";

const background = "/images/background/backgroundContactUs.webp";

const ContactUs: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-screen text-contact-us-text px-6 pt-24 pb-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-5xl mx-auto mb-6 flex items-center gap-4">
        <div className="p-4 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-contact-us-border bg-gradient-to-br from-contact-us-background-from via-contact-us-background-via to-contact-us-background-to">
          <FileText className="w-8 h-8 text-contact-us-text" />
        </div>
        <h1 className="text-3xl font-semibold text-contact-us-text tracking-wider">
          Contact Us
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-16 max-w-5xl mx-auto w-full items-stretch">
        <div className="flex-1 backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-lg flex flex-col justify-between min-h-[500px]">
          <div>
            <h2 className="text-3xl font-semibold mb-10 text-contact-us-text">
              SEND US MESSAGE
            </h2>
            <form className="space-y-5 flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col w-full md:w-[48%]">
                  <label className="text-contact-us-text text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    className="backdrop-blur-md bg-contact-us-fields-background rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-contact-us-border text-contact-us-text"
                  />
                </div>

                <div className="flex flex-col w-full md:w-[48%]">
                  <label className="text-contact-us-text text-sm mb-1">Country</label>
                  <select
                    className="backdrop-blur-md bg-contact-us-fields-background rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-contact-us-border text-contact-us-text"
                  >
                    <option value="Colombia">Colombia</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col w-full md:w-[48%]">
                  <label className="text-contact-us-text text-sm mb-1">Company</label>
                  <input
                    type="text"
                    className="backdrop-blur-md bg-contact-us-fields-background rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-contact-us-border text-contact-us-text"
                  />
                </div>

                <div className="flex flex-col w-full md:w-[48%]">
                  <label className="text-contact-us-text text-sm mb-1">Your Email</label>
                  <input
                    type="email"
                    className="backdrop-blur-md bg-contact-us-fields-background rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-contact-us-border text-contact-us-text"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-contact-us-text text-sm mb-1">Your Phone</label>
                <input
                  type="text"
                  className="backdrop-blur-md bg-contact-us-fields-background rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-contact-us-border text-contact-us-text"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-contact-us-text text-sm mb-1">How can we help?</label>
                <input
                  type="text"
                  className="backdrop-blur-md bg-contact-us-fields-background rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-contact-us-border text-contact-us-text"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-contact-us-text text-sm mb-1">More details</label>
                <textarea
                  placeholder="Tell us more about your project, goals, and how we can help you achieve them..."
                  className="w-full backdrop-blur-md bg-contact-us-fields-background placeholder-contact-us-text rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-contact-us-border text-contact-us-text min-h-[150px]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-contact-us-background-from via-contact-us-background-via to-contact-us-background-to rounded-2xl py-3 text-contact-us-text text-lg font-semibold shadow-contact-us-button"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-contact-us-background-from via-contact-us-background-via to-contact-us-background-to backdrop-blur-lg rounded-2xl p-8 shadow-lg flex flex-col justify-between min-h-[500px] border border-contact-us-border">
          <div>
            <h2 className="text-3xl font-semibold mb-10 text-contact-us-text">
              CONTACT INFO
            </h2>
            <div className="space-y-5 text-sm text-contact-us-text">
              <div>
                <p className="text-xs font-semibold mb-2 tracking-wider text-contact-us-title">ADDRESS:</p>
                <div className="flex items-center gap-2 mb-8">
                  <MapPinCheck className="w-5 h-5" />
                  <p className="font-semibold">
                    888 Biscayne Blvd. Suite 505, Miami, FL 33132, USA
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold mb-2 tracking-wider text-contact-us-title">PHONE:</p>
                <div className="flex items-center gap-2 mb-8">
                  <PhoneCall className="w-5 h-5" />
                  <p className="font-semibold">+1 856 614 5441</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold mb-2 tracking-wider text-contact-us-title">EMAIL:</p>
                <div className="flex items-center gap-2">
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
};

export default ContactUs;
