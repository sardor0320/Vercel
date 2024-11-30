import { MarqueeDemo } from "../components/ui/test";
import { Hero } from "../components/hero/hero";
import ShinyButtonDemo from "../components/button/button";
import img2 from "../assets/img/section2.png";
import img3 from "../assets/img/sectiom3.png";
import img4 from "../assets/img/50 (1).png";
import img5 from "../assets/img/22.png";
import img6 from "../assets/img/7 (1).png";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar/navbar";
export const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* hero navbar */}
      <section className="relative ">
        <div className=" mx-auto lg:max-w-7xl w-full  sm:px-10 md:px-12  px-14 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            className=" order-2 lg:order-1 relative flex flex-col  text-center lg:text-left  
            lg:items-start lg:max-w-none max-w-3xl "
          >
            <MarqueeDemo />
          </div>
        </div>
      </section>
      {/* hero navbar */}
      {/* section 2 */}
      <section className="relative py-12 lg:py-22">
        <div className=" mx-auto lg:max-w-7xl w-full  sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            className=" order-2 lg:order-1 relative flex flex-col  text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <div className="w-[80%]  m-10 ">
              <h1 className="pb-4 text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF2DF7] from-20% via-[#0565ff] via-30% to-[#07eeff]">
                AI Marketing.
              </h1>
              <h2 className="text-4xl md:text-5xl text-black dark:text-white">
                Optimized Reach.
              </h2>
              <p className=" text-center lg:text-left text-lg lg:text-xl mt-14 text-black dark:text-gray-200 ">
                DOML is a digital media agency powered by AI technology
                providing real time,{" "}
                <span className="text-sky-600 font-medium">
                  data-driven insights
                </span>{" "}
                on your business and audience. The mission of DOML is to create
                the best experiences for companies through intelligent insights,
                powerful analytics and{" "}
                <span className="text-sky-600 font-medium">
                  strategic execution.
                </span>
              </p>
              <div className="flex justify-center">
                <p className="w-[85%] lg:w-full mt-14 h-[1.5px] bg-gradient-to-br from-sky-300 to-blue-600"></p>
              </div>
              <div className="mt-14 lg:justify-start justify-center flex">
                <ShinyButtonDemo textName="Learn more" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-1 lg:w-1/2 lg:h-auto justify-center relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src={img2}
              alt="section image"
              className="lg:absolute  w-[100%] lg:h-90 rounded-2xl object-cover lg:max-h-none max-h-100"
            />
          </div>
        </div>
      </section>
      {/* section 2 */}
      {/* section 3 */}
      <section className="relative py-12 lg:py-22">
        <div className=" mx-auto lg:max-w-7xl w-full  sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            className=" order-2 relative flex flex-col  text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <div className="w-[81%]  m-10  ">
              <h1 className="pb-4 text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF2DF7] from-20% via-[#0565ff] via-30% to-[#07eeff]">
                AI Marketing.
              </h1>
              <h2 className="text-4xl md:text-5xl text-black dark:text-white">
                Optimized Reach.
              </h2>
              <p className=" text-center lg:text-left text-lg lg:text-xl mt-14 text-black dark:text-gray-200 ">
                It's all about getting your message in front of the right
                audience and creating those valuable{" "}
                <span className="text-sky-600 font-medium">
                  relationships.{" "}
                </span>
                Learn More about how DOML can help you do just that - all with a
                simple, easy-to-use platform.
              </p>
              <div className="flex justify-center">
                <p className="w-[85%] lg:w-full mt-14 h-[1.5px] bg-gradient-to-br from-sky-300 to-blue-600"></p>
              </div>
              <div className="mt-14 lg:justify-start justify-center flex">
                <ShinyButtonDemo textName="Learn more" />
              </div>
            </div>
          </div>
          <div className="order-1 flex flex-1 lg:w-1/2 lg:h-auto justify-end relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src={img3}
              alt="section image"
              className="lg:absolute  w-[100%] lg:h-90 rounded-2xl object-cover lg:max-h-none max-h-100"
            />
          </div>
        </div>
      </section>
      {/* section 3 */}
      {/* section 4 */}

      {/* section 4 */}
      {/* section 5 */}
      <section className="relative py-12 lg:py-22">
        <div className=" mx-auto lg:max-w-7xl w-full  sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            className=" order-2 lg:order-1 relative flex flex-col  text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <div className="w-[80%]  m-10 ">
              <h1 className="pb-4 text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF2DF7] from-20% via-[#0565ff] via-30% to-[#07eeff]">
                AI Marketing.
              </h1>
              <h2 className="text-4xl md:text-5xl text-black dark:text-white">
                Optimized Reach.
              </h2>
              <p className=" text-center lg:text-left text-lg lg:text-xl mt-14 text-black dark:text-gray-200 ">
                DOML is a digital media agency powered by AI technology
                providing real time,{" "}
                <span className="text-sky-600 font-medium">
                  data-driven insights
                </span>{" "}
                on your business and audience. The mission of DOML is to create
                the best experiences for companies through intelligent insights,
                powerful analytics and{" "}
                <span className="text-sky-600 font-medium">
                  strategic execution.
                </span>
              </p>
              <div className="flex justify-center">
                <p className="w-[85%] lg:w-full mt-14 h-[1.5px] bg-gradient-to-br from-sky-300 to-blue-600"></p>
              </div>
              <div className="mt-14 lg:justify-start justify-center flex">
                <ShinyButtonDemo textName="Learn more" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-1 lg:w-1/2 lg:h-auto justify-center relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src={img4}
              alt="section image"
              className="lg:absolute  w-[100%] lg:h-90 rounded-2xl object-cover lg:max-h-none max-h-100"
            />
          </div>
        </div>
      </section>
      {/* section 5 */}
      {/* section 6 */}
      <section className="">
        <div className=" mx-auto lg:max-w-7xl w-full  sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            className=" order-2 relative flex flex-col  text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <div className="w-[81%]  m-10  ">
              <h1 className="pb-4 text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF2DF7] from-20% via-[#0565ff] via-30% to-[#07eeff]">
                AI Marketing.
              </h1>
              <h2 className="text-4xl md:text-5xl text-black dark:text-white">
                Optimized Reach.
              </h2>
              <p className=" text-center lg:text-left text-lg lg:text-xl mt-14 text-black dark:text-gray-200 ">
                It's all about getting your message in front of the right
                audience and creating those valuable relationships. Learn More
                about how DOML can help you do just that - all with a simple,
                easy-to-use platform.
              </p>
              <div className="flex justify-center">
                <p className="w-[85%] lg:w-full mt-14 h-[1.5px] bg-gradient-to-br from-sky-300 to-blue-600"></p>
              </div>
              <div className="mt-14 lg:justify-start justify-center flex">
                <ShinyButtonDemo textName="Learn more" />
              </div>
            </div>
          </div>
          <div className="order-1 flex flex-1 lg:w-1/2 lg:h-auto justify-end relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src={img5}
              alt="section image"
              className="lg:absolute  w-[100%] lg:h-90 rounded-2xl object-cover lg:max-h-none max-h-100"
            />
          </div>
        </div>
      </section>
      {/* section 6 */}
      {/* section 7 */}
      <section className=" flex justify-center lg:px-4 px-5 ">
        <div className=" h-max rounded-2xl pb-10 inset-0   bg-[linear-gradient(267.03deg,_#00F0FF_4.01%,_#5200FF_57.55%,_#FF2DF7_114.97%)] lg:max-w-7xl w-full px-6 sm:px-0 flex items-center flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            className="order-2 relative flex flex-col lg:pr-32 pr-0  text-center lg:text-left lg:py-2 xl:py-3 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <div className=" w-[100%] grid items-center h-max  ">
              <h2 className="text-5xl font-light md:text-5xl text-black dark:text-white">
                Get exponential reach via{" "}
                <span className="font-medium">AI Marketing</span>
              </h2>
            </div>
            <div className=" flex flex-wrap  w-[100%] mt-5 justify-around gap-y-5 ld:gap-y-0">
              <input
                className=" w-[90%] lg:w-[60%] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
                placeholder="Enter your work email"
              />
              <ShinyButtonDemo textName="Get in touch" />
            </div>
          </div>
          <div className="order-1 flex-1 lg:w-1/2 lg:h-[80%] h-16 justify-end relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src={img6}
              alt="section image"
              className=" lg:w-[90%]  w-[100%] lg:h-96 pt-6 object-cover lg:max-h-none max-h-100"
            />
          </div>
        </div>
      </section>
      {/* section 7 */}
      {/* hero navbar */}
      <section className="relative ">
        <div className=" mx-auto lg:max-w-7xl w-full  sm:px-10 md:px-12  px-14 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            className=" order-2 lg:order-1 relative flex flex-col  text-center lg:text-left  
            lg:items-start lg:max-w-none max-w-3xl "
          >
            <MarqueeDemo />
          </div>
        </div>
      </section>
      {/* hero navbar */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};
