const Banner = ({ head, par }) => {
  return (
    <div className="text-center text-white">
      <h2 className="text-5xl font-bold">{head}</h2>
      <h2 className="text-2xl">{par}</h2>
    </div>
  );
};

export default Banner;
