"use client";

import { LuxuryHero } from "@/components/shared/hero-section";
import React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/shared/common/container";
import Link from "next/link";
import { DiscordIcon } from "@/svg/icons";
import Bring from "@/components/shared/bring";

const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    selectedSubject: "general",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, selectedSubject: value }));
  };

  return (
    <div className="relative">
      {/* <div className="absolute inset-0 bg-black h-full w-full"/> */}
      <LuxuryHero
        className="py-0! min-h-70!"
        backgroundImage="/images/show3.jpg"
        highlightedText="Get in Touch"
        description="Whether you have questions about models, customization, installation, or pricing, our team of experts is ready to assist."
      />

      <Container className="mt-16 py-16 font-outfit">
        <div className="   bg-[#CA854463] p-3 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[490px_1fr]">
            {/* Left Column - Contact Information */}
            <div className="relative overflow-hidden bg-primary rounded-lg w-full   ">
              {/* Decorative circle background */}
              <div className="absolute -right-16 -bottom-16 h-58 w-58 bg-white rounded-full opacity-20" />
              <div className="absolute right-16 bottom-16 h-36 w-36 bg-white/50 rounded-full opacity-20" />

              <div className="relative z-10  space-y-11 p-4 md:p-10 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="  text-[28px]  text-white">
                    Contact Information
                  </h3>
                  <p className="   text-lg">
                    Say something to start a live chat!
                  </p>
                </div>

                <div className="   space-y-11">
                  <div className=" space-y-11 flex flex-col justify-between">
                    {/* Phone */}
                    <div className=" flex items-start gap-5">
                      <Phone className="mt-1 h-6 w-6 text-white " />
                      <span>+1012 3456 789</span>
                    </div>

                    {/* Email */}
                    <div className=" flex items-start gap-5">
                      <Mail className="mt-1 h-6 w-6 text-white " />
                      <span>demo@gmail.com</span>
                    </div>

                    {/* Address */}
                    <div className="  flex items-start gap-5">
                      <div>
                        <MapPin className="mt-1 h-6 w-6 text-white " />
                      </div>
                      <div>
                        <p>132 Dartmouth Street Boston,</p>
                        <p>Massachusetts 02156 United States</p>
                      </div>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="mb-6  ">
                    <h4 className="mb-3 text-lg">Timing</h4>
                    <ul className="space-y-1 ml-3 text-white text-sm">
                      <li>• Monday - Friday 9am to 5pm</li>
                      <li>• Saturday - 9am to 2pm</li>
                      <li>• Sunday - Closed</li>
                    </ul>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 ">
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-smook text-white hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-smook text-white hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-smook text-white hover:text-primary transition-colors"
                  >
                    <DiscordIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="py-6 px-4 md:p-12">
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-xs ">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full border-b text-sm border-gray-400 bg-transparent py-2 text-white placeholder-white/60 focus:border-b-2 focus:border-yellow-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs ">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full border-b text-sm border-gray-400 bg-transparent py-2 text-white placeholder-white/60 focus:border-b-2 focus:border-yellow-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email and Subject */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-xs ">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b text-sm border-gray-400 bg-transparent py-2 text-white placeholder-white/60 focus:border-b-2 focus:border-yellow-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs ">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enter Subject"
                      className="w-full border-b text-sm border-gray-400 bg-transparent py-2 text-white placeholder-white/60 focus:border-b-2 focus:border-yellow-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Select Subject Radio Buttons */}
                <div>
                  <label className="mb-3 block text-sm font-medium ">
                    Select Subject?
                  </label>
                  <div className="flex flex-wrap  gap-6">
                    {[
                      "General Inquiry",
                      "General Inquiry",
                      "General Inquiry",
                      "General Inquiry",
                    ].map((option, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="subject-radio"
                          id={`subject-${index}`}
                          value={`subject-${index}`}
                          checked={
                            formData.selectedSubject === `subject-${index}`
                          }
                          onChange={() => handleRadioChange(`subject-${index}`)}
                          className="h-4 w-4 cursor-pointer  appearance-none border border-yellow-600
    rounded-full
    bg-transparent
    checked:bg-yellow-600
    checked:border-yellow-600
    checked:ring-1
    checked:ring-yellow-600/40  "
                        />
                        <label
                          htmlFor={`subject-${index}`}
                          className="cursor-pointer text-xs "
                        >
                          General Inquiry
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="  mt-16 block text-xs ">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message.."
                    // rows={5}
                    className="w-full border-b border-gray-400 bg-transparent py-2 text-white placeholder-white text-sm focus:border-b-2 focus:border-yellow-600 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Bring
       image="/images/hero-home.jpg"
        title="Bring Luxury Outdoors"
        text="Design a space where style, performance, and lifestyle come together. "
        text1="Your Ferrano outdoor kitchen is crafted to last — and designed to inspire."
        button="Start Your project"
        buttonLink="/contacts" 
        />
    </div>
  );
};

export default page;
