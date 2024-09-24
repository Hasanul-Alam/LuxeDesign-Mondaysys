import CommonLayout from "../Shared/CommonLayout";

const VisionaryVibes = () => {
  const imgLink =
    "https://i.ibb.co.com/q1QQZ5z/Screenshot-2024-09-24-223330.png";
  return (
    <div className="py-16 max-md:py-0" style={{ backgroundColor: "#ebebeb" }}>
      <div className="mx-auto w-[65%] max-md:w-[95%]">
        <CommonLayout
          imgLink={imgLink}
          header={"Visionary Vibes"}
          buttonText={"Video Production"}
        />
        <img className="mx-auto" src="https://i.ibb.co.com/pn6zmLk/Screenshot-2024-09-24-224103.png" alt="" />
      </div>
    </div>
  );
};

export default VisionaryVibes;
