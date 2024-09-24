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
    <div className="w-[65%] mx-auto py-16 max-md:w-[95%]">
      <CommonLayout
        imgLink={imgLink}
        header={"Fusion Design Hub"}
        buttonText={"Website"}
      />
      <div className="flex items-center w-[90%] ms-auto gap-10 max-md:w-full max-md:block">
        <div>
          <img
            src="https://i.ibb.co.com/LZSCW8h/Screenshot-2024-09-24-180738.png"
            alt=""
          />
        </div>
        <div className="max-md:mt-8">
          <img
            src="https://i.ibb.co.com/PNzX5Rq/Screenshot-2024-09-24-180837-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      {/* What we do section */}
      <div className="flex justify-between items-center max-md:block my-32 max-md:mt-16">
        {/* Heading */}
        <div className="w-[83%] max-md:w-full">
          <h2 className="text-8xl font-light max-md:text-6xl max-md:text-center max-md:font-normal">
            What we do
          </h2>
          <p className="text-2xl mt-5 max-md:text-xl">
            Lift your brand to make a lasting impact on history.
          </p>
        </div>

        {/* The rings */}
        <div className="w-[17%] max-md:w-[80%] max-md:mx-auto max-md:mt-10">
            <img className="ml-auto max-md:mx-auto" src="https://luxedesign.my.canva.site/images/0946acdf71c153fd38e01b1762134ed5.svg" alt="" />
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
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
