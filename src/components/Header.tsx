import pix1 from "../assets/pics/logo-full.05ea951a9a5341c342027070e15fb071.svg";

const Header = () => {
  return (
    <div>
      <div className="w-[100%] h-[11vh] flex justify-center items-center bg-white fixed">
        <div className="w-[97%] h-[10vh]  flex justify-between items-center">
          <div className="flex justify-between gap-1">
            <img src={pix1} alt="hie" />
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex justify-center items-center font-semibold">
              Login
            </div>
            <button className="py-2 px-4 bg-blue-600 text-white rounded-3xl font-semibold">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
