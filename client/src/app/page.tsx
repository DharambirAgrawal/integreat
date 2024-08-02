// export default HomePage;
"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, DollarSign, Zap } from "lucide-react";
import {
  CheckCircle,
  ShieldCheck,
  Globe,
  Briefcase,
  Heart,
} from "lucide-react";
//http://dharambir.com.np
const HomePage = () => {
  return (
    <>
      <Head>
        <title>InteGreat - Workforce Solutions in Dallas, Texas</title>
        <meta
          name="description"
          content="InteGreat offers quality virtual global talent and teams with huge cost savings and efficiency. Specializing in remote Accounting and IT professionals for US firms."
        />
      </Head>

      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            InteGreat
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-blue-600">
                Industries & Roles
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                IT Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 flex items-center">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl font-bold mb-4">
                Unlock Your Business Potential with{" "}
                <span className="bg-red-500 text-white px-2">
                  Global Workforce
                </span>
              </h1>
              <p className="text-xl mb-6">Workforce Solutions that offers:</p>
              <ul className="list-disc list-inside mb-8">
                <li>Quality Virtual Global Talent/Teams</li>
                <li>Huge Cost Savings</li>
                <li>Efficient teams</li>
              </ul>
              <p className="mb-4">
                Specialization in hiring remote Accounting professionals and
                building teams (including tax and audit) for US CPA Firms
              </p>
              <p className="mb-8">
                Specialization in hiring remote IT professionals and building
                remote teams for US IT Firms
              </p>
              <Link
                href="/solutions"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Find Solutions
              </Link>
            </div>
            <div className="w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full z-0"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500 rounded-full z-0"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-500 rounded-full z-0"></div>
                <Image
                  src="/hero-image.jpg"
                  alt="Smiling professional woman"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold">
            Inte<span className="text-yellow-300">Great</span>
          </Link>
          <ul className="hidden md:flex space-x-8">
            {["About Us", "Industries & Roles", "IT Services", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`/${item
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/ /g, "-")}`}
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </header>
      <main>
        <section className="bg-gradient-to-b from-indigo-600 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Workforce Solutions that Deliver
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                A Proud Company in Dallas, Texas
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Users, text: "Quality Virtual Global Talent/Teams" },
                { icon: DollarSign, text: "Huge Cost Savings" },
                { icon: Zap, text: "Efficient Teams" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white text-indigo-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
                >
                  <item.icon size={48} className="mb-4" />
                  <p className="font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Our Specializations
              </h2>
              <ul className="space-y-2">
                <li>
                  Remote Accounting professionals and teams (including tax and
                  audit) for US CPA Firms
                </li>
                <li>Remote IT professionals and teams for US IT Firms</li>
              </ul>
            </motion.div>
            <div className="text-center">
              <Link
                href="/solutions"
                className="inline-block bg-yellow-400 text-indigo-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300"
              >
                Find Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <main className="container mx-auto px-4">
        <section className="bg-yellow-100 p-8 rounded-md shadow-md my-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              What is included in our services?
            </h2>
            <p className="text-blue-500 mt-2">
              to make fancy as left but a bit differently, see below
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="p-4 border-l-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">Virtual Talent Hub</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  We fill positions per your needs with our pre-vetted
                  candidates with zero hiring fees.
                </li>
                <li>
                  We perform rigorous screening including background checks
                  prior to presenting candidates.
                </li>
                <li>
                  We manage and pay employee taxes to reduce compliance burden
                  on you.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-4 border-l-4 border-green-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">Business</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  We manage technology, data privacy, and workspace
                  infrastructure for our supplied workforce.
                </li>
                <li>
                  We provide complimentary dedicated account manager and
                  technical support from our experts.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-4 border-l-4 border-red-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">Your Well-Being</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  We provide employee health insurance, well-being, and other
                  benefits to supplied workforce.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/service-illustration.png"
              alt="Service Illustration"
              className="w-2/3"
            />
          </motion.div>
        </section>
      </main>
      <main className="container mx-auto px-4">
        <section className="bg-yellow-100 p-8 rounded-md shadow-md my-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              What is included in our services?
            </h2>
            <p className="text-blue-500 mt-2">
              to make fancy as left but a bit differently, see below
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="p-4 border-l-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">Virtual Talent Hub</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-2" />
                  We fill positions per your needs with our pre-vetted
                  candidates with zero hiring fees.
                </li>
                <li className="flex items-center">
                  <ShieldCheck className="w-6 h-6 text-blue-500 mr-2" />
                  We perform rigorous screening including background checks
                  prior to presenting candidates.
                </li>
                <li className="flex items-center">
                  <Users className="w-6 h-6 text-blue-500 mr-2" />
                  We manage and pay employee taxes to reduce compliance burden
                  on you.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-4 border-l-4 border-green-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">Business</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <Globe className="w-6 h-6 text-green-500 mr-2" />
                  We manage technology, data privacy, and workspace
                  infrastructure for our supplied workforce.
                </li>
                <li className="flex items-center">
                  <Briefcase className="w-6 h-6 text-green-500 mr-2" />
                  We provide complimentary dedicated account manager and
                  technical support from our experts.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-4 border-l-4 border-red-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">Your Well-Being</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-2" />
                  We provide employee health insurance, well-being, and other
                  benefits to supplied workforce.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/service-illustration.png"
              alt="Service Illustration"
              className="w-2/3"
            />
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
