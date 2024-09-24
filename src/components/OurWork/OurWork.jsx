import CommonLayout from "../Shared/CommonLayout";

const OurWork = () => {
  const imgLink = "https://i.ibb.co.com/w7LMzHB/Screenshot-2024-09-24-100416-removebg-preview.png";
  return (
    <div className="py-10">
      {/* All Images */}
      <div className="w-[65%] mx-auto max-md:w-[95%]">
        <h2 className="text-8xl mt-10 mb-32 font-serif Georgia font-light max-md:text-7xl max-md:text-center">
          Our Work
        </h2>
        <div className="flex justify-between max-md:block">
          <div>
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/QCcRjC8/Screenshot-2024-09-24-085205.png"
              alt=""
            />
          </div>
          <div>
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/1JdqpMj/Screenshot-2024-09-24-085553.png"
              alt=""
            />
          </div>
          <div>
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/jGDx0Rm/Screenshot-2024-09-24-085341.png"
              alt=""
            />
          </div>
          <div>
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/q93gjfL/Screenshot-2024-09-24-085540.png"
              alt=""
            />
          </div>
          <div>
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/0qKKxPy/Screenshot-2024-09-24-085427.png"
              alt=""
            />
          </div>
          <div>
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/SPxqddz/Screenshot-2024-09-24-085456.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between mt-5 max-md:block">
          <div className="mt-[-109px] max-md:mt-0">
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/6gvLRfd/Screenshot-2024-09-24-085258.png"
              alt=""
            />
          </div>
          <div className="mt-[-109px] max-md:mt-0">
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/CVZ17Mj/Screenshot-2024-09-24-085324.png"
              alt=""
            />
          </div>
          <div className="">
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/L1bQ1Zp/Screenshot-2024-09-24-085356.png"
              alt=""
            />
          </div>
          <div className="">
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/w6f6Qbg/Screenshot-2024-09-24-085411.png"
              alt=""
            />
          </div>
          <div className="mt-[-109px] max-md:mt-0">
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/NyncR3z/Screenshot-2024-09-24-085442.png"
              alt=""
            />
          </div>
          <div className="mt-[-109px] max-md:mt-0">
            <img
            className="max-md:mx-auto max-md:mt-5"
              src="https://i.ibb.co.com/0F9XxvH/Screenshot-2024-09-24-085512.png"
              alt=""
            />
          </div>
        </div>

        <CommonLayout imgLink={imgLink} header={"PixelCraft"} buttonText={"Brand Identity"}/>

        {/* Pixel Craft
        <div className="flex justify-between my-32">
          <div className="w-[40%]">
            <div>
              <h3 className="text-5xl font-light">PixelCraft</h3>
              <button className="border border-1 border-black rounded-full px-5 py-2 text-lg my-5">
                Brand Identity
              </button>
            </div>
            <div className="ms-8">
              <div className="flex gap-3 mt-10">
                <h3 className="text-5xl">01</h3>
                <div>
                  <h3 className="text-3xl">Background</h3>
                  <p className="text-lg mt-2">
                    Can you fill me in on your project in a nutshell? Spill the
                    tea on the client brand and the main puzzle you are
                    tackling.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-16">
                <h3 className="text-5xl">02</h3>
                <div>
                  <h3 className="text-3xl">Solution</h3>
                  <p className="text-lg mt-2">
                    {"Let's"} hear about your ingenious plan! Dive into the
                    nitty-gritty of how you cracked the code and became the
                    superhero for your client.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] text-end">
            <img
              className="ml-auto"
              src="https://i.ibb.co.com/w7LMzHB/Screenshot-2024-09-24-100416-removebg-preview.png"
              alt=""
            />
          </div>
        </div> */}

        {/* Cards of work section */}
        <div className="flex justify-center gap-8 max-md:block">
          <img className="max-md:mt-5" src="https://i.ibb.co.com/tYQLTgn/Screenshot-2024-09-24-102617.png" alt="" />
          <img className="max-md:mt-5" src="https://i.ibb.co.com/dGb4L27/Screenshot-2024-09-24-102558.png" alt="" />
          <img className="max-md:mt-5" src="https://i.ibb.co.com/NTR50cf/Screenshot-2024-09-24-102635.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
