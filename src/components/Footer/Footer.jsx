import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#191919" }}
      className="text-white pt-16 pb-32"
    >
      <div className="w-[65%] mx-auto">
        <div className="w-[80%] mx-auto flex justify-between items-center gap-8">
          <div>
            <h5 className="text-3xl mb-16">Luxe Design</h5>
            <h2 className="text-8xl my-12">
              Make your <br /> mark
            </h2>
            <button className="border border-2 border-white p-3 px-14 text-2xl rounded-full">
              Work With Us
            </button>
          </div>
          <div>
            {/* Email and Phone */}
            <div>
              <p className="text-xl">hello@LuxeDesign.com</p>
              <p className="text-xl">(922) 4764-9088</p>
            </div>
            {/* Address */}
            <div className="my-10">
              <p className="text-xl">123 Western Street.</p>
              <p className="text-xl">New City ST 65400</p>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <div className="border border-2 border-white p-2 rounded-full text-xl hover:cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="border border-2 border-white p-2 rounded-full text-xl hover:cursor-pointer">
                <FaTwitter />
              </div>
              <div className="border border-2 border-white p-2 rounded-full text-xl hover:cursor-pointer">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
