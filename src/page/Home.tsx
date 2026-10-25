import NewComp from "../components/newComp";
import conn from "../assets/pics/air.svg";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <main>
      <section
        className="flex min-h-[34rem] items-center justify-center bg-[#080b36] bg-cover bg-center px-4 py-20 sm:min-h-[40rem] sm:px-6"
        style={{
          backgroundImage: 'url("/hero.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Virtual machines anyone can set up in seconds
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-base font-medium text-white sm:text-lg">
              Get dependable uptime with our 99.99% SLA, simple security tools,
              and predictable monthly pricing with DigitalOcean&apos;s virtual
              machines, called Droplets.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <button className="mt-8 rounded-full bg-white px-6 py-3 font-bold text-slate-900 shadow-md transition hover:bg-slate-100 motion-reduce:transition-none">
              Get Started
            </button>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-black sm:text-4xl">
            Comprehensive, cost-effective cloud computing
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Reveal delay={0.05}>
            <NewComp
              header="Easily deploy and manage your Droplets"
              content="Interact with your Droplets how you want. Our intuitive UI, CLI, API, and Terraform Provider make it simple to manage your virtual machines."
              tag="Read More"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <NewComp
              header="Reliably scale as your demand shifts"
              content="Resize a Droplet or scale horizontally with many of them. Deploy across globally distributed data centers each with our 99.99% uptime SLA."
              tag="Learn How"
            />
          </Reveal>
          <Reveal delay={0.25}>
            <NewComp
              header="Build and monitor, and secure your apps for less"
              content="Get exceptional bandwidth pricing and 500 GiB per month of outbound data transfer—plus monitoring and firewalls—for free with every Droplet."
              tag="View our Prices"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <div className="mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl border bg-white shadow-sm md:flex-row md:items-center">
            <div className="p-6 sm:p-10 md:w-3/5 lg:p-12">
              <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                Forrester TEI report finds DigitalOcean delivers 50% savings and
                186% ROI
              </h2>
              <p className="mt-4 text-slate-600">
                Cut cloud computing costs by 50%, enhance productivity, and
                achieve 186% ROI by running your business on DigitalOcean
                instead of hyperscalers. Explore Forrester&apos;s Total Economic
                ImpactTM Study of DigitalOcean to see how startups &amp; SMBs
                are unlocking the power of cloud computing.
              </p>
              <div className="mt-6 flex items-center gap-2 font-medium">
                Download study <FaArrowRight aria-hidden="true" />
              </div>
            </div>
            <img
              src={conn}
              alt="Cloud computing illustration"
              className="h-64 w-full object-cover md:h-full md:min-h-[24rem] md:w-2/5"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;
