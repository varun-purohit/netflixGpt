const VideoTitle = ({ title, description }) => {
  console.log(title, description);
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black from-[-35%]">
      <h1 className="font-bold text-5xl ">{title}</h1>
      <p className="text-lg w-1/4 py-6">{description}</p>
      <button className="bg-slate-200 text-black p-2 px-6 text-xl rounded-lg hover:bg-opacity-80">
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