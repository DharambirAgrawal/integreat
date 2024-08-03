import React from "react";
import Link from "next/link";
import { UserCheck, Zap, Shield, TrendingUp, Users } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Quality resources guaranteed",
      description:
        "Access to candidates recruited by experienced accounting professionals who have previously worked for small, medium and large (including Big 4) CPA firms",
    },
    {
      icon: Zap,
      title: "Rapid Talent Deployment",
      description:
        "Accelerate onboarding for immediate access to skilled professionals.",
    },
    {
      icon: Shield,
      title: "Seamless Technology Integration",
      description:
        "Onboard skilled professionals with instant access to hardware and our highly secure technology infrastructure",
    },
    {
      icon: TrendingUp,
      title: "Optimal Cost Management",
      description:
        "Reduce expenses while driving business expansion and enhancing work culture",
    },
    {
      icon: Users,
      title: "Account Manager",
      description:
        "Dedicated account manager who are experienced accounting professionals in the US that have previously worked for small, medium and large (including Big 4) CPA firms",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Us?</h2>

          <p className="mt-4">
            Discover the Qualities that distinguish us from the rest
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:shadow-gray-500/10"
            >
              <feature.icon className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="mt-4 text-xl font-bold">{feature.title}</h2>

              <p className="mt-1 text-sm ">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
