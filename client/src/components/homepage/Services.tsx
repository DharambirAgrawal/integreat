import { MotionDiv } from "../app/Motion";
import {
  CheckCircle,
  ShieldCheck,
  Users,
  Globe,
  Briefcase,
  Heart,
} from "lucide-react";

const Services = () => {
  return (
    <section className=" py-10">
      <div className="container mx-auto p-8 rounded-md shadow-md bg-white py-20">
        <MotionDiv
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-indigo-800">
            What is Included in Our Services?
          </h2>
        </MotionDiv>

        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.3 }}
        >
          <MotionDiv
            className="p-6 bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Virtual Talent Hub
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-2" />
                We fill positions per your needs with our pre-vetted candidates
                with zero hiring fees.
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-6 h-6 text-blue-500 mr-2" />
                We perform rigorous screening including background checks prior
                to presenting candidates.
              </li>
              <li className="flex items-center">
                <Users className="w-6 h-6 text-blue-500 mr-2" />
                We manage and pay employee taxes to reduce compliance burden on
                you.
              </li>
            </ul>
          </MotionDiv>

          <MotionDiv
            className="p-6 bg-gradient-to-b from-green-100 to-green-50 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Business Solutions
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <Globe className="w-6 h-6 text-green-500 mr-2" />
                We manage technology, data privacy, and workspace infrastructure
                for our supplied workforce.
              </li>
              <li className="flex items-center">
                <Briefcase className="w-6 h-6 text-green-500 mr-2" />
                We provide complimentary dedicated account manager and technical
                support from our experts.
              </li>
            </ul>
          </MotionDiv>

          <MotionDiv
            className="p-6 bg-gradient-to-b from-red-100 to-red-50 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-red-800 mb-4">
              Employee Well-Being
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <Heart className="w-6 h-6 text-red-500 mr-2" />
                We provide employee health insurance, well-being, and other
                benefits to supplied workforce.
              </li>
            </ul>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Services;
