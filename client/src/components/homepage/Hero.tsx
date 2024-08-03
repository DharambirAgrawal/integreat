import Image from "next/image";
import Link from "next/link";
import { HeroImage } from "../../../public/index";
import { MotionDiv } from "../app/Motion";
const Hero = () => {
  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center flex-col md:flex-row">
        <MotionDiv
          className="md:w-1/2 w-full md:pr-8 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Unlock Your Business Potential with{" "}
            <span className="bg-red-500 text-white px-2">Global Workforce</span>
          </h1>
          <p className="text-xl mb-6">Workforce Solutions that offer:</p>
          <ul className="list-disc list-inside mb-8 text-lg text-gray-700">
            <li>Quality Virtual Global Talent/Teams</li>
            <li>Huge Cost Savings</li>
            <li>Efficient Teams</li>
          </ul>
          <p className="mb-4">
            Specialization in hiring remote Accounting professionals and
            building teams (including tax and audit) for US CPA Firms
          </p>
          <p className="mb-8">
            Specialization in hiring remote IT professionals and building remote
            teams for US IT Firms
          </p>
          <Link
            href="/solutions"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 inline-block"
          >
            Find Solutions
          </Link>
        </MotionDiv>
        <div className="md:w-1/2 w-full">
          <MotionDiv
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MotionDiv
              className="absolute -top-16 -left-16 w-40 h-40 bg-blue-500 rounded-full z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            ></MotionDiv>
            <MotionDiv
              className="absolute -bottom-16 -right-16 w-40 h-40 bg-green-500 rounded-full z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                delay: 0.2,
              }}
            ></MotionDiv>
            <MotionDiv
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-500 rounded-full z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                delay: 0.4,
              }}
            ></MotionDiv>
            <Image
              src={HeroImage}
              alt="Smiling professional woman"
              width={500}
              height={500}
              className="rounded-lg shadow-xl relative z-10"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
