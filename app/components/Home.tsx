// import Image from "next/image";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Book, CalendarDays, LineChart, Map } from "lucide-react";
import StepsSection from './StepSections';
const mockTests = [
    { id: 1, title: "SERU Grammer Mock Test – 1" },
    { id: 2, title: "SERU Grammer Mock Test – 2" },
    { id: 3, title: "Theory Mock Test 6" },
  ];
  const promises = [
    {
      icon: <Map size={48} strokeWidth={1.5} />,
      title: "Realistic Tests",
      description:
        "All of our questions are designed to closely match real test questions. We’ll make sure that there are no surprises at the test centre.",
    },
    {
      icon: <LineChart size={48} strokeWidth={1.5} />,
      title: "Progress Tracking",
      description:
        "Check your test results to see your progress and stay on track. Re-do the tests you’ve failed and gain confidence from the ones you’ve passed.",
    },
    {
      icon: <Book size={48} strokeWidth={1.5} />,
      title: "Self Paced",
      description:
        "All of our material is available to you from the very beginning. Study at your own speed and rest assured, we’re here to help every step of the way.",
    },
    {
      icon: <CalendarDays size={48} strokeWidth={1.5} />,
      title: "Convenient",
      description:
        "Read the handbook or complete our mock tests from any place, any device, any time. We are live 24/7 so you can prepare whenever you want.",
    },
  ];
const HomePage: React.FC = () => {
   
      
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div 
        className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-bold">What is SERU?</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            SERU stands for Safety, Equality, and Regulatory Understanding. TFL SERU Assessment Test is computer-based...
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-red-500 px-6 py-3 rounded-lg text-white">Enroll Now</button>
            <button className="bg-green-500 px-6 py-3 rounded-lg text-white">Try Free</button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StepsSection/>
    <section className="text-center py-16">
      <h3 className="text-lg font-semibold text-gray-900">Find out more about the test</h3>
      <h2 className="text-3xl font-bold text-blue-800 mt-2">
        Topographical Theory Practice and Mock Test
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-700">
        This Topographical Theory test is provided to acquaint you with the format of the official test. 
        You are advised to familiarise with the official A-Z Atlas handbook before attempting the test. 
        The test consists of 25 questions for 25 marks; each question carrying 1 mark. Click the button below to start the test.
      </p>
      <div className="mt-6">
        <button className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition">
          START TEST
        </button>
      </div>
    </section>

    <section className="bg-blue-900 text-white py-12 text-center">
      <h2 className="text-3xl font-bold">Topographical Theory Test</h2>
      <p className="mt-2 text-lg">
        We strongly advise you to read the handbook before starting our practice tests.
      </p>
      <div className="flex justify-center mt-8 gap-6 px-6">
        {mockTests.map((test) => (
          <div key={test.id} className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-start">
            <div className="flex justify-between w-full items-center">
              <h3 className="font-semibold">{test.title}</h3>
              <FaFileAlt className="text-gray-500 text-2xl" />
            </div>
            <button className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition">
              Start Now
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition">
          <IoIosArrowBack size={24} />
        </button>
        <button className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition">
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </section>
{/*Promise Section  */}


<section className="text-center py-12 bg-white">
      <h2 className="text-3xl font-semibold mb-4">OUR PROMISE</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        We’ve helped thousands of people pass their topographical test. Here’s
        how we’re going to make you pass too!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {promises.map((promise, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-4 rounded-full mb-4">
              {promise.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{promise.title}</h3>
            <p className="text-gray-600">{promise.description}</p>
          </div>
        ))}
      </div>
    </section>


     

      {/* Course Overview */}
      <div className="py-16 px-4 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">Our Courses</h2>
        <div className="mt-10 flex justify-center">
          <div className="bg-white p-6 shadow-lg rounded-lg max-w-sm">
            <h3 className="text-xl font-semibold">SERU Assessment Course</h3>
            <p className="mt-4">• TFL SERU Full Assessment Training</p>
            <p>• 500+ SERU Real Exam Questions</p>
            <p>• 10+ Hours of Learning</p>
            <p className="mt-4 font-bold">£39.99</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">Enroll</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; 2025 Developed By Birds of Eden. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;