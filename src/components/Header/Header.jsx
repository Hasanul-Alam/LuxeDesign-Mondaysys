const Header = () => {
  return (
    <div className=" w-[70%] mx-auto py-10 max-md:w-[95%] max-md:py-5">
      {/* Header Top Section */}
      <div className="flex justify-center justify-between max-md:block">
        <div>
          <img
            className="max-md:mx-auto"
            src="https://i.ibb.co.com/JBw4w5j/logo-removebg-preview.png"
            alt="Logo"
          />
        </div>
        <div>
          <h1 className="text-8xl max-md:text-4xl max-md:my-8 max-md:font-semibold">
            Shaping the <br /> Future through <br /> Design.
          </h1>
        </div>
        <div>
          <button className="border border-2 border-black p-3 px-14 text-2xl rounded-full max-md:mx-auto max-md:block">
            Work With Us
          </button>
        </div>
      </div>

      {/* Header Cards */}
      <div className="flex gap-4 justify-between my-12 max-md:block">
        <img className="max-md:mx-auto max-md:mt-5" src="https://i.ibb.co.com/phj4T4f/header-Image1.png" alt="" />
        <img className="max-md:mx-auto max-md:mt-5" src="https://i.ibb.co.com/jR4w7Xb/Screenshot-2024-09-23-213328.png" alt="" />
        <img className="max-md:mx-auto max-md:mt-5" src="https://i.ibb.co.com/47zkFP6/Screenshot-2024-09-23-213348.png" alt="" />
        <img className="max-md:mx-auto max-md:mt-5" src="https://i.ibb.co.com/1XLNvYm/Screenshot-2024-09-23-213402.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
