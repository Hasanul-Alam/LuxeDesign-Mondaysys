const Banner = () => {
  return (
    <div style={{backgroundColor: '#191919'}} className="text-white py-16">
      <div className="w-[65%] mx-auto max-md:w-[95%]">
        <div className="grid grid-cols-2 gap-4 flex justify-between justify-center items-center max-md:block">
          <div className="">
            <h2 className="text-8xl max-md:text-5xl">
              About <br /> LuxeDesign
            </h2>
            <img className="mt-10" src="https://i.ibb.co.com/3RK8rg7/Screenshot-2024-09-24-225158.png" alt="" />
            <p className="text-xl my-10">
              Established back in the rad 90s, LuxeDesign has been the go-to
              guru for a smorgasbord of design delights. Whether you need a
              splash of graphic magic, a snazzy new brand vibe, a killer
              website, or a blockbuster video, they have got your back!
            </p>
          </div>

          {/* Banner Image */}
          <div className="">
            <img
              className=""
              src="https://i.ibb.co.com/6bgs9G5/Screenshot-2024-09-23-221128.png"
              alt="Banner-Image"
            />
            <p className="text-xl my-10">
              Agatho is the cool kid on the block with clients from every corner
              of the globe and a trophy shelf to envy. When you team up with
              them, you are playing in the big leagues with top-notch creatives,
              tech whizzes, and trendsetters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
