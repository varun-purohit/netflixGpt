const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[27%] md:pt-[17%] px-6  md:px-24 absolute text-white bg-gradient-to-r from-black from-[-35%]">
      <h1 className="font-bold text-xl sm:text-3xl md:text-4xl  ">{title}</h1>
      <p className=" hidden md:inline-block text-sm w-1/4 py-4">
        {description}
      </p>
      <button className="bg-slate-200 text-black p-1 md:p-2 px-6 md:text-xl text-md rounded-lg hover:bg-opacity-80">
        {" "}
        ▶️ Play
      </button>
      <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
        More info
      </button>
    </div>
  );
};

export default VideoTitle;
