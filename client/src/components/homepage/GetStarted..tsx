import React from "react";
import { FileText, Users, CheckSquare, ArrowRight } from "lucide-react";
import { MotionDiv, MotionH2, MotionH3, MotionP } from "../app/Motion";
const HowToGetStarted = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Your Job Requirements",
      description:
        "Our team collaborates with you to understand the specific needs of your open positions, ensuring we find the ideal candidate or group of candidates (team) for your organization.",
    },
    {
      icon: Users,
      title: "Evaluate Top Candidates",
      description:
        "You'll receive a matrix of the shortlisted profiles, enabling you to interview one or more profiles and efficiently manage your time.",
    },
    {
      icon: CheckSquare,
      title: "Choose and Integrate",
      description:
        "We manage the job offers, complete all pre-employment checks and post-employment activities so that the chosen candidate or team can seamlessly integrate and start working with you as an extension of your team.",
    },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800"
        >
          How to Get Started?
        </MotionH2>
        <div className="relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <MotionDiv
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50,
                }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                    {step.title}
                  </h3>
                  <MotionP
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600"
                  >
                    {step.description}
                  </MotionP>
                </div>
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg transform transition-transform duration-500 hover:scale-110">
                  <MotionDiv
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 8,
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </MotionDiv>
                </div>
                <div className="w-1/2"></div>
              </MotionDiv>
              {index < steps.length - 1 && (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{ top: `${(index + 1) * 33.3}%` }}
                >
                  <ArrowRight className="w-8 h-8 text-indigo-500 animate-pulse" />
                </MotionDiv>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
