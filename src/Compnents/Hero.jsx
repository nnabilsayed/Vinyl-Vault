import { scroller } from "react-scroll";
const Hero = ({
  url,
  showbtn,
  btntext,
  showbtn2,
  btntext2,
  className,
  showbtn3,
  btntext3,
}) => {
  const onScroll = (scroll) => {
    scroller.scrollTo(scroll, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
      offset: -100, // Adjust the offset if needed
    });
  };
  /*(const onScroll2 = () => {
    scroller.scrollTo("sale", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuint",
      // Adjust the offset if needed
    });
  };
*/
  return (
    <div className="p-10 pl-10 pr-10 rounded-3xl text-white">
      <div
        className="hero min-h-screen rounded-3xl  "
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <div className="hero-overlay bg-opacity-25 "></div>
        <div className="hero-content text-center text-white ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Vinyl Record Shop</h1>
            <p className="mb-5 text-xl">
              Check out the latest and trending vinyls Check out the latest and
              trending vinyls Check out the latest and trending vinyls
            </p>

            <div className="space-x-7">
              {showbtn && (
                <button
                  onClick={() => onScroll("cardListSection")}
                  className={className}
                >
                  {btntext}
                </button>
              )}
              {showbtn2 && (
                <button
                  onClick={() => onScroll("sale")}
                  className=" text-white bg-black w-36 h-10 rounded-2xl"
                >
                  {btntext2}
                </button>
              )}
              {showbtn3 && (
                <button
                  onClick={() => onScroll("vinyls")}
                  className={className}
                >
                  {btntext3}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
