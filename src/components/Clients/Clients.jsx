const Clients = () => {
  const imgLinks = [
    {
      link: "https://i.ibb.co.com/PTsGzVg/Screenshot-2024-09-24-192818.png",
    },
    {
      link: "https://i.ibb.co.com/7N7rBpm/Screenshot-2024-09-24-192848.png",
    },
    {
      link: "https://i.ibb.co.com/5KddkBr/Screenshot-2024-09-24-192909.png",
    },
    {
      link: "https://i.ibb.co.com/6BVd1K0/Screenshot-2024-09-24-192947.png",
    },
    {
      link: "https://i.ibb.co.com/khJYcKQ/Screenshot-2024-09-24-193013.png",
    },
    {
      link: "https://i.ibb.co.com/2WQ8md0/Screenshot-2024-09-24-193025.png",
    },
    {
      link: "https://i.ibb.co.com/j6nmBv7/Screenshot-2024-09-24-193038.png",
    },
    {
      link: "https://i.ibb.co.com/drVKXHw/Screenshot-2024-09-24-193048.png",
    },
  ];
  return (
    <div style={{ backgroundColor: "#d8d8d8" }} className="py-16">
      <div className="w-[65%] mx-auto">
        <h2 className="text-8xl">Our Clients</h2>

        {/* Clients Images */}
        <div className="grid grid-cols-4 justify-center items-center gap-6 mt-32">
          {imgLinks.map((imgLink) => (
            <div key={imgLink.link}>
              <img src={imgLink.link} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
