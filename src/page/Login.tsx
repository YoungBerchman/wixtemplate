import mac from "../assets/pics/oauth-logo-google.420169f299402ff6bd627eeff16bad0d.svg";
import mac2 from "../assets/pics/oauth-logo-github.8ce7a7e3abf7ccf79ccc5b0bdcc9f46e.svg";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] bg-slate-100 md:grid-cols-2">
      <section className="flex items-center justify-center px-4 py-10 sm:px-6 md:py-12">
        <Reveal>
          <div className="mx-auto w-full max-w-lg rounded-3xl border bg-white p-6 shadow-xl sm:p-10">
            <h1 className="text-3xl font-bold">Log in to your account</h1>
            <form className="mt-6">
              <label htmlFor="email" className="mb-2 block font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <label htmlFor="password" className="mb-2 mt-5 block font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <Link to="/Landing">
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 motion-reduce:transition-none"
                >
                  Log In
                </button>
              </Link>
            </form>
            <div className="mt-4 grid gap-3">
              <button className="flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 font-semibold transition hover:bg-slate-50 motion-reduce:transition-none">
                <img src={mac} alt="" className="h-5 w-5" />
                Sign In with Google
              </button>
              <button className="flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 font-semibold transition hover:bg-slate-50 motion-reduce:transition-none">
                <img src={mac2} alt="" className="h-5 w-5" />
                Sign In with GitHub
              </button>
            </div>
            <a
              href="#"
              className="mt-5 inline-block text-blue-700 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </Reveal>
      </section>

      <section
        className="hidden items-center justify-center bg-cover bg-center px-8 py-12 md:flex"
        style={{
          backgroundImage: 'url("/hero1.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Reveal>
          <div className="mx-auto w-full max-w-xl rounded-2xl bg-slate-950/30 p-8 text-white lg:p-12">
            <h2 className="text-3xl font-bold">
              GPU power. DigitalOcean simplicity.
            </h2>
            <p className="mt-5 text-lg font-medium lg:text-xl">
              GPU solutions for everyone—novice to expert. Run training and
              inference, process large data sets, spin up helpful agents, and
              deploy high-performance compute clusters.
            </p>
            <p className="mt-5 text-lg font-medium lg:text-xl">
              Do it all with GPUs and complete cloud infrastructure on
              DigitalOcean.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Login;
