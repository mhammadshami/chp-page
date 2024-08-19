import { motion } from "framer-motion";
import "./test.css";
import { fadeIn } from "./variants";

const communityPillars = [
  "Community emergency plans",
  "Local resource mobilization ",
  "Local adaptation initiatives",
  "Awareness & education",
  "Multi-sectoral coordination",
  "Advocacy & policy influencing",
];
const healthOrgPillars = [
  "Climate resilient infrastructure",
  "Early warning systems",
  "National adaptation plan",
  "Health workforce planning",
  "Emergency response training",
];
const healthSystemsPillars = [
  "Climate-related emergency preparedness & management",
  "Climate transformative leadership",
  "Health & climate research ",
  "Health & climate policy adoption & implementation",
];

const section3 = [
  {
    title: "Stakeholders",
    list: [
      "Policy makers",
      "Healthcare providers",
      "Non-governmental organizations",
      "Community-based organizations",
      "Local communities",
      "Emergency managers",
      "Disaster risk reduction specialists",
      "Scientists & researchers",
      "Think tanks",
    ],
    icon: "/images/people.png",
  },
  {
    title: "Considerations",
    list: [
      "Gender equity",
      "Health disparities",
      "Social justice",
      "Local context",
      "Adopted legal framework",
    ],
    icon: "/images/settings.png",
  },
];

const diagramData = [
  {
    title: "Health Systems",
    icon: "/images/setting.png",
    iconAlt: "setting image",
    hoverList: [
      "Increased demand for healthcare services",
      "Strain on health infrastructure",
      "Resource scarcity",
      "Healthcare workforce burnout",
      "Financial burden for emergency response",
    ],
  },
  {
    title: "Healthcare Organizations",
    icon: "/images/hospital.png",
    hoverList: [
      "Increased patient load",
      "Infrastructural damage",
      "Resource shortage",
      "Healthcare workforce stress & burnout",
      "Financial strains",
      "Operational disruptions",
    ],
  },
  {
    title: "Community",
    icon: "/images/community.png",
    hoverList: [
      "Climate change-related illnesses (heat-induced, food, water, vector-borne & cardiopulmonary diseases, etc.)",
      "Mental health consequences & stress",
      "Food security & malnutrition",
      "Social inequity & gender disparaties",
      "Population displacement",
      "Economic impact (increased healthcare costs)",
    ],
  },
];
function App() {
  return (
    <>
      <div className="container mx-auto mb-10">
        <div className="px-3">
          <div className="flex flex-col items-center mx-auto">
            <div className="flex flex-col items-center">
              {" "}
              <motion.img
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                width="180"
                height="180"
                className="sm:w-[250px] sm:h-[250px]"
                src="/images/climate-image.png"
                alt="climate image"
              />
              <motion.span
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="font-bold text-2xl text-[#092140]"
              >
                Climate Change
              </motion.span>
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="my-5"
              >
                <img
                  width="60"
                  height="60"
                  className="rotate-180"
                  src="/images/arrow.png"
                  alt="arrow image"
                />
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="relative"
            >
              {/* start health systems circle stlyes */}
              <div className="group relative w-[300px] h-[300px] sm:w-[375px] sm:h-[375px] pt-3 flex flex-col items-center bg-[#2398D6] rounded-full">
                <span className="text-white font-semibold text-sm">
                  {diagramData[0].title}
                </span>
                <img
                  src={diagramData[0].icon}
                  alt={diagramData[0].iconAlt}
                  width="30"
                  height="30"
                />
                <div className="w-[260px] absolute left-[calc(-100%+155px)] hidden group-hover:flex">
                  <ul
                    className="
      flex-col text-[14.8px] text-[#2398D6]
    "
                  >
                    {diagramData[0].hoverList.map((item, index) => (
                      <motion.li
                        variants={fadeIn("up", 0.1 * index)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        key={index}
                        className="relative before:content-[''] after:absolute after:w-[4px] after:h-[4px] after:rounded-full after:bg-[#2398D6] after:-left-[10px] after:top-[50%] after:-translate-y-[50%]"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* end health systems circle stlyes */}

              {/* start healthcare organizations styles */}
              <div className="group/child flex flex-col items-center absolute bottom-0 left-[50%] -translate-x-[50%] w-[236px] h-[236px] sm:w-[280px] sm:h-[280px] bg-[#3276BA] rounded-full">
                <div className="text-white font-semibold text-sm mt-[30px]">
                  {diagramData[1].title}
                </div>
                <img
                  src="/images/hospital.png"
                  alt="healthcare organizations"
                  width="30"
                  height="30"
                />
                <div
                  className="w-[175px] absolute right-[calc(-100%+30px)] top-[40px] hidden group-hover/child:block
                "
                >
                  <ul
                    className="
        flex-col text-[14.8px] text-[#2398D6]
      "
                  >
                    {diagramData[1].hoverList.map((item, index) => (
                      <motion.li
                        variants={fadeIn("up", 0.1 * index)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        key={index}
                        className="relative before:content-[''] after:absolute after:w-[4px] after:h-[4px] after:rounded-full after:bg-[#2398D6] after:-left-[10px] after:top-[50%] after:-translate-y-[50%]"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* end healthcare organizations styles */}
              <div className="group flex flex-col items-center absolute bottom-0 left-[50%] -translate-x-[50%] w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] bg-[#175D96] rounded-full">
                <div className="text-white font-semibold text-sm mt-4">
                  {diagramData[2].title}
                </div>
                <img
                  src="/images/community.png"
                  alt="community"
                  width="30"
                  height="30"
                />
                <div className="absolute w-[200px] left-[calc(-100%-98px)] hidden group-hover:flex">
                  <ul
                    className="
      flex-col text-[14.8px] text-[#2398D6]
    "
                  >
                    {diagramData[2].hoverList.map((item, index) => (
                      <motion.li
                        variants={fadeIn("up", 0.1 * index)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        key={index}
                        className="relative before:content-[''] after:absolute after:w-[4px] after:h-[4px] after:rounded-full after:bg-[#2398D6] after:-left-[10px] after:top-[50%] after:-translate-y-[50%]"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="my-5"
            >
              <img
                width="60"
                height="60"
                className="rotate-180"
                src="/images/arrow.png"
                alt="arrow image"
              />
            </motion.div>

            <div className="flex flex-col w-full lg:w-[900px] py-10 px-3 md:px-10 gap-7 bg-[#f1f1f1] shadow-md mb-10">
              <h2 className="text-center font-bold text-2xl text-[#092140]">
                Preparedness Pillars
              </h2>
              <div className="flex flex-wrap justify-center gap-[35px]">
                {" "}
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="text-base text-white w-[250px]"
                >
                  <h3 className="text-[#175D96] text-center font-[700] mb-[7px] text-[16px]">
                    Community
                  </h3>
                  <ul className="min-h-[234px] text-[14.4px] flex flex-col gap-[3px] bg-[#175D96] py-6 px-5 rounded-md shadow-md">
                    {communityPillars.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="text-base text-white w-[250px]"
                >
                  <h3 className="text-[#3276BA] text-center font-[700] mb-[7px] text-[16px]">
                    Healthcare Organizations
                  </h3>
                  <ul className="min-h-[234px] text-[14.4px] flex flex-col gap-[6px] bg-[#3276BA] py-6 px-5 rounded-md shadow-md">
                    {healthOrgPillars.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="text-base text-white w-[250px]"
                >
                  <h3 className="text-[#2398D6] text-center font-[700] mb-[7px] text-[16px]">
                    Health Systems
                  </h3>
                  <ul className="min-h-[234px] text-[14.4px] flex flex-col gap-[6px] bg-[#2398D6] py-6 px-5 rounded-md shadow-lg">
                    {healthSystemsPillars.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-[20px] sm:gap-[55px] md:gap-[70px]">
              {section3.map((item, index) => (
                <motion.div
                  variants={fadeIn(index == 0 ? "right" : "left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  key={index}
                  className="relative w-full sm:w-[400px]"
                >
                  <h3 className="mb-3 text-[#175D96] text-[18px] font-bold text-center">
                    {item.title}
                  </h3>
                  <ul className="min-h-[220px] bg-[#f1f1f1] text-[#092140] rounded-md px-5 py-3 ps-[50px] flex flex-col justify-center text-center text-sm">
                    {item.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="absolute flex items-center justify-center bg-white rounded-full w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] top-[17px] sm:top-0 -left-[8px] sm:-left-[50px]">
                    <img
                      src={item.icon}
                      width="70"
                      height="70"
                      alt={item.title}
                      className="sm:w-[70px] sm:h-[70px]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
