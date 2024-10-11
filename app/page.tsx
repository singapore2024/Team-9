"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import { auth } from "@/auth";
import { signOut } from "@/auth";

export default async function Home() {
  const router = useRouter();
  
 
    

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header /> 

      {/* Home Section */}
      <section id="home" className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Organization</h2>
        <p className="text-lg text-gray-700 mb-8 px-8 max-w-2xl mx-auto">
          Join us in our mission to make a difference. Together, we can tackle the world's biggest challenges.
        </p>
        <Image src="/images/home.png" alt="Welcome Image" width={600} height={400} className="mx-auto rounded-lg" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="text-center py-20 bg-white">
        <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
        <p className="text-lg text-gray-700 mb-8 px-8 max-w-2xl mx-auto">
          We are committed to implementing impactful projects around the globe. Discover our latest initiatives.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="/images/project1.png" alt="Project 1" width={300} height={200} className="rounded-lg shadow-md" />
          <Image src="/images/project2.png" alt="Project 2" width={300} height={200} className="rounded-lg shadow-md" />
          <Image src="/images/project3.png" alt="Project 3" width={300} height={200} className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="involved" className="text-center py-20 bg-blue-50">
        <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-8 px-8 max-w-2xl mx-auto">
          Be part of the change. Whether you want to volunteer, donate, or spread awareness, there are many ways to get involved.
        </p>
        <button 
          onClick={() => router.push('/sign-up')}
          className="bg-blue-900 text-white py-2 px-8 rounded-md hover:bg-orange-700 transition"
        >
          Join Us
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="text-center py-20 bg-white">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-8 px-8 max-w-2xl mx-auto">
          We are a global organization committed to making a lasting impact. Learn more about our story, our values, and our team.
        </p>
        <Image src="/images/about.png" alt="About Us" width={600} height={400} className="mx-auto rounded-lg shadow-lg" />
      </section>
   </div>
  )
}


