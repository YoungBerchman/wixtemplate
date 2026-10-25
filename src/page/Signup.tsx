import pix from "../assets/pics/oauth-logo-google.420169f299402ff6bd627eeff16bad0d.svg";
import pix1 from "../assets/pics/oauth-logo-github.8ce7a7e3abf7ccf79ccc5b0bdcc9f46e.svg";
import backgroundImage from "../assets/pics/image10.png";
import Reveal from "../components/Reveal";

const Signup = () => {
  return (
    <main
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-cover bg-center px-4 py-10 sm:px-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Reveal>
        <section className="mx-auto w-full max-w-xl rounded-3xl bg-white p-6 shadow-xl sm:p-10">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Create your account
          </h1>
          <p className="mt-4 text-lg">
            Start spending more time on your projects and less time managing
            your infrastructure.
          </p>
          <div className="mt-6 grid gap-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 font-semibold transition hover:bg-slate-50 motion-reduce:transition-none">
              <img src={pix} alt="" className="h-5 w-5" />
              Signup with Google
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 font-semibold transition hover:bg-slate-50 motion-reduce:transition-none">
              <img src={pix1} alt="" className="h-5 w-5" />
              Signup with Github
            </button>
            <button className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 motion-reduce:transition-none">
              Signup with Email
            </button>
          </div>
        </section>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mx-auto mt-4 w-full max-w-xl text-center text-sm text-white">
          By signing up you agree to the Terms of Service and Privacy Policy
        </p>
      </Reveal>
    </main>
  );
};

export default Signup;
