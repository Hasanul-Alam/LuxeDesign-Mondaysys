import CommonLayout from "../Shared/CommonLayout";

const FusionDesignHub = () => {
  const buttonTexts = [
    {
      buttonName: "Brand Identity",
    },
    {
      buttonName: "Brand Activation",
    },
    {
      buttonName: "Website Development",
    },
    {
      buttonName: "Brand strategy",
    },
    {
      buttonName: "Video Production",
    },
    {
      buttonName: "Integrated Marketing",
    },
  ];

  //   Content Image Link
  const imgLink =
    "https://i.ibb.co.com/vDZTyNQ/Screenshot-2024-09-24-180220.png";

  return (
    <div className="w-[65%] mx-auto py-16">
      <CommonLayout
        imgLink={imgLink}
        header={"Fusion Design Hub"}
        buttonText={"Website"}
      />
      <div className="flex items-center w-[90%] ms-auto gap-10">
        <div>
          <img
            src="https://i.ibb.co.com/LZSCW8h/Screenshot-2024-09-24-180738.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/PNzX5Rq/Screenshot-2024-09-24-180837-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      {/* What we do section */}
      <div className="flex justify-between items-center">
        {/* Heading */}
        <div>
          <h2 className="text-8xl font-light">What we do</h2>
          <p className="text-2xl mt-5">
            Lift your brand to make a lasting impact on history.
          </p>
        </div>

        {/* The rings */}
        <div className="flex justify-center items-center h-screen bg-white">
          <div className="relative">
            <div className="absolute top-12 right-16 w-36 h-36 rounded-full border-2 border-black"></div>
            <div className="absolute top-6 right-8 w-36 h-36 rounded-full border-2 border-black"></div>
            <div className="absolute top-0 right-0 w-36 h-36 rounded-full border-2 border-black"></div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="grid grid-cols-3 gap-8">
        {buttonTexts.map((buttonText) => (
          <div key={buttonText.buttonName}>
            <button className="border border-2 border-black rounded-full w-full py-5 text-2xl">
              {buttonText.buttonName}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FusionDesignHub;
