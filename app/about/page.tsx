import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Users, Zap, Award, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />

      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              About Our Company
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We are a leading managed IT services provider, dedicated to
              empowering businesses with cutting-edge technology solutions and
              unparalleled cybersecurity expertise.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At WestLake, our mission is to provide businesses with robust,
                  scalable, and secure IT solutions that drive growth, enhance
                  productivity, and protect valuable digital assets.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We strive to be more than just a service provider; we aim to
                  be a trusted partner in our clients' success, offering
                  personalized strategies and cutting-edge technologies to meet
                  the unique challenges of each organization we serve.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team working on IT solutions"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  description:
                    "We uphold the highest standards of honesty and ethical conduct in all our dealings.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "We believe in the power of teamwork and partnership with our clients.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "We continuously seek new and improved ways to deliver value to our clients.",
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description:
                    "We strive for excellence in every aspect of our service delivery.",
                },
                {
                  icon: Zap,
                  title: "Responsiveness",
                  description:
                    "We are committed to swift and effective responses to our clients' needs.",
                },
                {
                  icon: Award,
                  title: "Expertise",
                  description:
                    "We invest in our team's skills and knowledge to stay at the forefront of IT.",
                },
              ].map((value, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-orange-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Ready to secure your IT infrastructure?
            </h2>
            <p className="text-xl mb-8">
              Let's work together to create a tailored solution for your
              business.
            </p>

            <Link
              href={"/meeting"}
              className="mx-auto w-[20%] px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 flex flex-row gap-2 items-center justify-center font-semibold"
            >
              Learn more <Zap className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
