import pix from "../assets/pics/oauth-logo-google.420169f299402ff6bd627eeff16bad0d.svg";
import pix1 from "../assets/pics/oauth-logo-github.8ce7a7e3abf7ccf79ccc5b0bdcc9f46e.svg";
import backgroundImage from "../assets/pics/image10.png"; // Adjust the path to your image

const Signup = () => {
  return (
    <div
      className="w-full h-[100vh] flex justify-center items-center flex-col shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Optional: to add a red tint
      }}
    >
      <div className="w-[37%] h-[60vh] bg-white rounded-[20px] mt-10 flex flex-col">
        <div className="text-4xl flex ml-20 font-bold">Create your account</div>
        <div className="flex justify-center ml-5">
          <div className="w-[90%] mt-5 text-xl font-normal ">
            Start spending more time on your projects and less time managing
            your infrastructure.
          </div>
        </div>
        <div className="flex justify-center">
          <button className="rounded-[12px] w-[80%] h-[7vh] flex justify-center mt-6 items-center border font-semibold gap-3 hover:text-white hover:bg-blue-600 transition-all duration-1000">
            <img src={pix} alt="Google logo" />
            <p>Signup with Google</p>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="rounded-[12px] w-[80%] bg-white h-[7vh] flex justify-center mt-6 items-center border font-semibold gap-3 text-black hover:text-white hover:bg-blue-600 transition-all duration-1000">
            <img src={pix1} alt="Github logo" />
            <p>Signup with Github</p>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="rounded-[12px] w-[80%] h-[7vh] flex justify-center mt-6 items-center border font-semibold bg-blue-600 text-white hover:opacity-90 transition-all duration-100">
            <p>Signup with Email</p>
          </button>
        </div>

        <div></div>
      </div>
      <div className="w-[80vw] mt-3 flex justify-center items-center text-center">
        By signing up you agree to the Terms of Service and Privacy Policy
      </div>
    </div>
  );
};

export default Signup;
