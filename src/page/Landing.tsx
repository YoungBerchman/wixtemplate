import { FaArrowRight } from "react-icons/fa";
import pix from "../assets/pics/download.svg";
import pix1 from "../assets/pics/images.svg";
import mac from "../assets/pics/oauth-logo-google.420169f299402ff6bd627eeff16bad0d.svg";
import mac2 from "../assets/pics/oauth-logo-github.8ce7a7e3abf7ccf79ccc5b0bdcc9f46e.svg";
import Reveal from "../components/Reveal";

const Landing = () => {
  return (
    <main>
      <section
        className="bg-blue-600 bg-cover bg-center px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16"
        style={{
          backgroundImage: 'url("/hero.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-blue-950 px-4 py-3 text-sm text-white sm:text-base">
              <span>
                DigitalOcean GPU Droplets are now available. Perfect for your
                AI/ML workload. Learn more
              </span>
              <FaArrowRight className="shrink-0" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 text-4xl font-bold leading-tight text-white sm:mt-10 sm:text-5xl lg:text-6xl">
              Learn here. Dream here.
              <br /> Develop here.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-3xl text-base text-white sm:text-lg">
              Powerful and production-ready, our cloud platform has the
              solutions that devs like you need to succeed whether you&apos;re
              building world-changing AI apps, running a side project, or
              building a business.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex w-full max-w-3xl flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <button className="rounded-full bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-blue-100 motion-reduce:transition-none">
                Sign up with email
              </button>
              <button className="flex items-center justify-center gap-3 rounded-full bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-blue-100 motion-reduce:transition-none">
                <img src={mac} alt="" className="h-5 w-5" />
                Sign up with Google
              </button>
              <button className="flex items-center justify-center gap-3 rounded-full bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-blue-100 motion-reduce:transition-none">
                <img src={mac2} alt="" className="h-5 w-5" />
                Sign up with GitHub
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <img
              src={pix}
              alt="DigitalOcean cloud platform preview"
              className="mt-12 w-full rounded-2xl shadow-2xl sm:mt-16"
            />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-blue-600 text-white md:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Now Available: GPU Droplets
              </h2>
              <p className="mt-4 leading-relaxed">
                GPU solutions for everyone—novice to expert. Run training and
                inference, process large data sets and complex neural networks,
                and deploy high-performance computing clusters.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center gap-2 font-medium"
              >
                Learn more <FaArrowRight aria-hidden="true" />
              </a>
            </div>
            <img
              src={pix1}
              alt="GPU Droplets illustration"
              className="h-56 w-full object-contain p-4 sm:h-72 md:h-full md:min-h-80"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Landing;
