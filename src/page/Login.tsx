import mac from "../assets/pics/oauth-logo-google.420169f299402ff6bd627eeff16bad0d.svg";
import mac2 from "../assets/pics/oauth-logo-github.8ce7a7e3abf7ccf79ccc5b0bdcc9f46e.svg";
import backgroundImage from "../assets/pics/hero-4.add51103.svg"; // Adjust the path to your image

const Login = () => {
  return (
    <div className="w-[100%] h-[650px] bg-slate-200 flex justify-center items-center">
      <div className="w-[100%] h-[100vh] flex justify-between items-center">
        <div className="w-[37vw] h-[100vh] flex-col flex justify-center items-center">
          <div className="w-[35vw] h-[87vh] bg-white rounded-[27px] flex justify-center items-center mt-20 shadow-xl ml-32 border">
            <div className="w-[31vw] h-[80vh] flex-wrap">
              <p className="text-3xl font-bold">Log in to your account</p>
              <div className="flex-col gap-4">
                <p className="mt-5">Email</p>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-[30vw] h-[7vh] rounded-lg border bg-blend-overlay mt-1 pl-5"
                />
              </div>
              <div className="flex-col gap-4">
                <p className="mt-5">Password</p>
                <input
                  type="password" // Use type password for security
                  placeholder="Enter your password"
                  className="w-[30vw] h-[7vh] rounded-lg border bg-blend-overlay mt-1 pl-5"
                />
              </div>
              <div className="flex justify-center">
                <button className="rounded-[12px] w-[29.9vw] mr-5 h-[7vh] flex bg-blue-500 justify-center mt-6 items-center font-semibold text-white">
                  Log In
                </button>
              </div>
              <div className="flex justify-center">
                <button className="rounded-[12px] border w-[29.9vw] mr-5 h-[7vh] flex justify-center mt-6 items-center font-semibold text-black gap-3">
                  <img src={mac} alt="Google logo" />
                  Sign In with Google
                </button>
              </div>
              <div className="flex justify-center">
                <button className="rounded-[12px] border w-[29.9vw] mr-5 h-[7vh] flex justify-center mt-6 items-center font-semibold text-black gap-3">
                  <img src={mac2} alt="GitHub logo" />
                  Sign In with GitHub
                </button>
              </div>
              <div className=" mt-4 hover:underline">Forgot Password?</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-[60%]">
          <div
            className="w-[49vw] h-[650px] flex justify-center items-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "2100px",
              backgroundPosition: "contain",
              backgroundRepeat: "no-repeat",
              // Optional: Add a purple overlay
              position: "static",
            }}
          >
            <div className="w-[61%] h-[70vh] flex-col justify-center items-center flex bg-opacity-50 rounded-lg">
              <div className="text-3xl font-bold text-white">
                GPU power. DigitalOcean simplicity.
              </div>
              <div className="font-semibold text-2xl mt-4 text-white">
                GPU solutions for everyone—novice to expert. Run training and
                inference, process large data sets, spin up helpful agents, and
                deploy high-performance compute clusters.
              </div>
              <div className="font-semibold text-2xl mt-4 text-white">
                Do it all with GPUs and complete cloud infrastructure on
                DigitalOcean.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
