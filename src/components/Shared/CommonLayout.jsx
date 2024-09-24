const CommonLayout = ({ imgLink, header, buttonText }) => {
  return (
    <div>
      {/* Pixel Craft */}
      <div className="flex justify-between my-32 max-md:block">
        <div className="w-[40%] max-md:w-full">
          <div>
            <h3 className="text-5xl font-light max-md:font-semibold max-md:text-4xl">{header}</h3>
            <button className="border border-1 border-black rounded-full px-5 py-2 text-lg my-5">
              {buttonText}
            </button>
          </div>
          <div className="ms-8">
            <div className="flex gap-3 mt-10 max-md:block">
              <h3 className="text-5xl max-md:text-right">01</h3>
              <div>
                <h3 className="text-3xl">Background</h3>
                <p className="text-lg mt-2">
                  Can you fill me in on your project in a nutshell? Spill the
                  tea on the client brand and the main puzzle you are tackling.
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-16 max-md:block">
              <h3 className="text-5xl max-md:text-right">02</h3>
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
        <div className="w-[60%] text-end max-md:w-[95%] max-md:mt-10">
          <img className="ml-auto" src={imgLink} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
