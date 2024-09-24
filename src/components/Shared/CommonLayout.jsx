

const CommonLayout = ({imgLink, header, buttonText}) => {
    return (
        <div>
            {/* Pixel Craft */}
        <div className="flex justify-between my-32">
          <div className="w-[40%]">
            <div>
              <h3 className="text-5xl font-light">{header}</h3>
              <button className="border border-1 border-black rounded-full px-5 py-2 text-lg my-5">
                {buttonText}
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
              src={imgLink}
              alt=""
            />
          </div>
        </div>
        </div>
    );
};

export default CommonLayout;