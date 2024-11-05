import NewComp from "../components/newComp";
import conn from "../assets/pics/air.svg";
import { FaArrowRight } from "react-icons/fa";
import backgroundImage from "../assets/pics/hero-4.add51103.svg"; // Adjust the path to your image

const Home = () => {
  return (
    <div>
      <div
        className="w-[100%] h-[90vh]  flex justify-center items-end"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "2100px",
          backgroundPosition: "contain",
          backgroundRepeat: "no-repeat",
          // Optional: Add a purple overlay
          position: "static",
        }}
      >
        <div className="w-[60%] h-[55vh]  flex-col justify-center items-center text-center">
          <div className="font-bold text-5xl text-white">
            Virtual machines anyone can set up
            <br /> in seconds
          </div>
          <div className="font-medium text-white mt-8">
            Get dependable uptime with our 99.99% SLA, simple security tools,
            and predictable
            <br /> monthly pricing with DigitalOcean's virtual machines, called
            Droplets.
          </div>
          <div>
            <button className="py-2 px-4 text-black bg-white rounded-3xl font-bold mt-8 border-s-white shadow-white shadow-md hover:bg-white">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <section>
        <div className="w-[100%] h-[25vh] flex justify-center items-center">
          <div className="font-bold text-4xl text-black">
            Comprehensive, cost-effective cloud computing
          </div>
        </div>
        <div className="w-[100%] h-[80vh] flex justify-center items-center">
          <div className="w-[80%] h-[75vh]  flex justify-between">
            <div className="w-full grid grid-cols-3 gap-16">
              <NewComp
                header={"Easily deploy and manage your Droplets"}
                content={
                  "Interact with your Droplets how you want. Our intuitive UI, CLI, API,and Terraform Provider make it simple to manage your virtual machines."
                }
                tag={"Read More"}
              />
              <NewComp
                header={"Reliably scale as your demand shifts"}
                content={
                  "Resize a Droplet or scale horizontally with many of them. Deploy across globally distributed data centers each with our 99.99% uptime SLA."
                }
                tag={"Learn How"}
              />
              <NewComp
                header={"Build and monitor, and secure your apps for less"}
                content={
                  "Get exceptional bandwidth pricing and 500 GiB per month of outbound data transfer—plus monitoring and firewalls—for free with every Droplet."
                }
                tag={"View our Prices"}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-[100%] h-[80vh] bg-slate-50 flex justify-center items-center ">
        <div className="w-[80%] h-[65vh] shadow-sm  border rounded-2xl flex justify-between items-center">
          <div className="w-[54%] h-[60vh]  felx-col justify-center items-center">
            <div className="font-semibold text-3xl ml-11 mt-7">
              Forrester TEI report finds DigitalOcean delivers 50% savings and
              186% ROI
            </div>
            <div className="mt-4 text-slate-500 ml-11 font-normal">
              Cut cloud computing costs by 50%, enhance productivity, and
              achieve 186% ROI by running your business on DigitalOcean instead
              of hyperscalers. Explore Forrester's Total Economic ImpactTM Study
              of DigitalOcean to see how startups & SMBs are unlocking the power
              of cloud computing.
            </div>
            <div className="flex justify-start items-center gap-2 mt-6 ml-11 font-medium">
              Download study <FaArrowRight />
            </div>
          </div>
          <img
            src={conn}
            alt="djdqo"
            className="w-[40%] h-[65vh] rounded-r-2xl"
          />{" "}
        </div>
      </div>
    </div>
  );
};
export default Home;
