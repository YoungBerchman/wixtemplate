// const Landing = () => {
//   const x = new Date().getTime();
//   console.log(x);

import { FaArrowRight } from "react-icons/fa";
import pix from "../assets/pics/download.svg";
import pix1 from "../assets/pics/images.svg";
import mac from "../assets/pics/oauth-logo-google.420169f299402ff6bd627eeff16bad0d.svg";
import mac2 from "../assets/pics/oauth-logo-github.8ce7a7e3abf7ccf79ccc5b0bdcc9f46e.svg";
import backgroundImage from "../assets/pics/hero-4.add51103.svg"; // Adjust the path to your image

//   return (
//     <div className="w-full h-[40vh] bg-red-500 flex justify-center items-center">
//       <div className="w-[40%] h-[30vh] bg-blue-600 flex justify-between items-center">
//         <Date />
//       </div>
//     </div>
//   );
// };
// export default Landing;

const Landing = () => {
  return (
    <div
      className="w-full h-[800px] bg-blue-500 flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "2100px",
        backgroundPosition: "contain",
        backgroundRepeat: "no-repeat",
        // Optional: Add a purple overlay
        position: "static",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-[70vw] h-[70vh]  flex-col justify-center items-center flex mt-96 ">
          <div className="flex justify-center items-start w-full">
            <button className="w-[52vw] h-[5vh] bg-blue-950 flex justify-center items-center] rounded-3xl text-white gap-1  mt-48">
              DigitalOcean GPU Droplet are now available.Perfect for yourAI/ML
              worksload.Learn more
              <div className="flex mt-1 items-center">
                <FaArrowRight />
              </div>
            </button>
          </div>
          <div className="text-5xl font-bold flex justify-center items-center text-white w-full text-center mt-10">
            Learn here. Dream here.
            <br /> Develop here.
          </div>
          <div className="font-normal text-center flex items-center justify-center w-full text-white mt-4">
            Powerful and production-ready, our cloud platform has the solutions
            that
            <br /> devs like you need to succeed whether you're building
            world-changing AI
            <br /> apps, running a side project, or building a business.
          </div>
          <div className="flex text-center w-[76] text-black gap-4">
            <button className="py-1 px-4 mt-8 bg-white rounded-3xl font-medium hover:text-white hover:bg-blue-600 transition-all duration-1000">
              Sign up with email
            </button>
            <button className="py-1 px-4 w-[17vw] mt-8 bg-white rounded-3xl font-medium hover:text-white hover:bg-blue-600 transition-all duration-1000 flex justify-between gap-1">
              <img src={mac} alt="jdoq" />
              <p>Sign up with Google</p>
            </button>
            <button className="py-1 px-4 w-[17vw] mt-8 bg-white rounded-3xl font-medium hover:text-white hover:bg-blue-600 transition-all duration-1000 flex justify-between gap-1">
              <img src={mac2} alt="jdoq" />
              <p>Sign up with GitHub</p>
            </button>
          </div>
        </div>
        <div className="w-[100vw] h-[80vh] mt-16 flex justify-center items-start">
          <div className="w-[80vw] h-[80vh] mt-14">
            <img src={pix} alt="diqd" className="rounded-3xl  shadow-2xl" />
          </div>
        </div>
        <div className="w-[100vw] h-[50vh] justify-center  flex items-center">
          <div className="w-[80vw] h-[35vh] bg-blue-600 rounded-2xl flex-col flex justify-center items-start mt-96">
            <div className="flex justify-between w-[100%] h-[35vh]">
              <div className="ml-14 w-[80vw] h-[35vh]">
                <div className="text-2xl font-bold text-white mt-6">
                  Now Available: GPU Droplets
                </div>
                <div className="w-[37vw] h-[20vh] mt-4 font-medium text-white">
                  GPU solutions for everyone—novice to expert. Run training and
                  inference, process large data sets and complex neural
                  networks, and deploy high-performance computing clusters
                </div>
                <div className="flex justify-between items-center w-[9vw] h-[5vh]">
                  <p className="font-medium text-white mb-9">Learn more</p>
                  <div className="flex justify-center items-center mb-9">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="w-[100vw] h-[35vh]">
                <img src={pix1} alt="ofo" className="w-[1400px] h-[39vh]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
