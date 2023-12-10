const NewsLetter = () => {
  return (
    <div className="flex justify-between bg-slate-500 items-center p-5 ">
      <div className="flex flex-col w-96">
        <h2 className="text-white text-3xl font-bold mb-4">
          Join Our Mailing List
        </h2>
        <p className="text-md font-bold">
          Sign up for news, exclusives, competitions, and more from Recordstore,
          plus get 10% off your next purchase
        </p>
      </div>
      <div className="flex flex-col w-60 space-y-4 ">
        <input
          className="h-12 px-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 bg-white"
          type="text"
          placeholder="Email"
        />
        <input
          className="h-12 px-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500  bg-white"
          type="text"
          placeholder="Country"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
