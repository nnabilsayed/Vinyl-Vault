const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sapien quam, ullamcorper sed pulvinar a, facilisis nec nibh. Fusce
            accumsan pellentesque tortor, ac auctor metus volutpat a. Donec
            mollis volutpat urna, sed laoreet eros posuere egestas. Aenean
            faucibus eget tellus a sodales. Nam eget erat tincidunt, placerat
            enim eget, luctus mauris. Donec id augue felis. Quisque ullamcorper
            massa ut nunc pulvinar, varius rutrum nisl lobortis. Aenean pharetra
            tristique est, aliquam tincidunt justo rhoncus in. Aliquam leo
            lectus, elementum et dictum vehicula, dignissim vitae leo. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Donec sed nisi
            fringilla, semper urna vel, porttitor purus. Vivamus mollis, massa
            non consectetur ultricies, nulla dui cursus erat, id tristique
            ligula tellus sit amet massa. Nunc aliquam eros sed tellus
            elementum, et sodales eros aliquet. Suspendisse rhoncus porttitor
            lacus a eleifend.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className="w-full h-full"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Bundesarchiv_B_145_Bild-F079073-0006%2C_Bonn%2C_Sternstra%C3%9Fe%2C_Schallplattengesch%C3%A4ft.jpg"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            Suspendisse eu tellus eu dui malesuada efficitur vitae eu diam.
            Proin quis eleifend ante, eget porta odio. Ut neque ex, aliquam quis
            mattis a, ultrices a erat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean ultrices consectetur dolor non fringilla.
            Vivamus libero nisi, vulputate ac mi id, consequat fringilla dolor.
            Donec viverra egestas luctus. In non dapibus nisi, quis finibus
            quam. Donec ac elit libero. Duis bibendum augue nec malesuada
            pulvinar. Fusce a enim pellentesque, vehicula leo sed, porta est.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds"
                alt="Alexa featured Image"
              />
              <img
                className="md:hidden block"
                src="https://variety.com/wp-content/uploads/2017/11/kendrick-lamar-variety-hitmakers.jpg?w=1000"
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4"></p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://yt3.googleusercontent.com/V4FqOieQ9y9dnErXPUZNWl1hyLafxIK7F55n5M8LVhPBmEou8kAbNuMlUZx23DoJHvH1sWG56No=s900-c-k-c0x00ffffff-no-rj"
                alt="Olivia featured Image"
              />
              <img
                className="md:hidden block"
                src="https://variety.com/wp-content/uploads/2017/11/kendrick-lamar-variety-hitmakers.jpg?w=1000"
                alt="Olivia featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4"></p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://hips.hearstapps.com/hmg-prod/images/lana-del-rey-attends-the-60th-annual-grammy-awards-at-madison-square-garden-on-january-28-2018-in-new-york-city-photo-by-dimitrios-kambouris_getty-images-for-naras-square.jpg"
                alt="Liam featued Image"
              />

              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4"></p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://miro.medium.com/v2/resize:fit:760/0*lKAqH-7k9qilE_vN.jpg"
                alt="Elijah featured image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
