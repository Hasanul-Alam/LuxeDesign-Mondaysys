const AwardsAndPress = () => {
  return (
    <div style={{ backgroundColor: "#191919" }} className="text-white py-16">
      <div className="w-[65%] mx-auto">
        <h2 className="text-8xl">Awards & Press</h2>

        {/* Cards */}
        <div className="w-[80%] mx-auto flex justify-between gap-16 mt-16">
          <div className="w-[25%]">
            <img
              src="https://i.ibb.co.com/6NY0wvW/Screenshot-2024-09-24-190822.png"
              alt=""
            />
            <p className="text-lg font-semibold">
              Press — Jan 03,
              <br />
              2030
            </p>
            <a href="#" className="text-4xl underline">
              PixelCraft collaborates with Studio LuxeDesign to introduce a new
              application.
            </a>
          </div>
          <div className="w-[25%]">
            <img
              src="https://i.ibb.co.com/h9sJFfY/Screenshot-2024-09-24-190900.png"
              alt=""
            />
            <p className="text-lg font-semibold">
              Press — Jan 03,
              <br />
              2030
            </p>
            <a href="#" className="text-4xl underline">
              Add title of article here
            </a>
          </div>
          <div className="w-[25%]">
            <img
              src="https://i.ibb.co.com/dKnFPN4/Screenshot-2024-09-24-190915.png"
              alt=""
            />
            <p className="text-lg font-semibold">
              Awards — Nov 24,
              <br />
              2030
            </p>
            <a href="#" className="text-4xl underline">
              Fusion Design Hub wins Agency of the Year
            </a>
          </div>
          <div className="w-[25%]">
            <img
              src="https://i.ibb.co.com/nLhYKcR/Screenshot-2024-09-24-190930.png"
              alt=""
            />
            <p className="text-lg font-semibold">
              Press — Jan 03,
              <br />
              2030
            </p>
            <a href="#" className="text-4xl underline">
              Add title of article here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsAndPress;
