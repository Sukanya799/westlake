import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Server,
  Users,
  Lock,
  Clock,
  Zap,
  BarChart,
  BookOpen,
  HeadsetIcon,
  Cloud,
  Database,
  Wifi,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />

      <main className="flex-grow">
        <header className="relative h-[70vh] bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="max-w-3xl text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-6">
                Strengthen Your Defense with NIST-Powered Cybersecurity
              </h1>
              <p className="text-xl mb-8">
                Protect your business with our advanced, people-centric security
                solutions
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
                <Link
                  className="flex flex-row gap-2 items-center"
                  href={"/meeting"}
                >
                  Get Started
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6 text-gray-800">
              IT Security You Can Count On
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our managed security services combine cutting-edge tools with
              expert analysis to keep your organization safe.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Shield, label: "Advanced Protection" },
                { icon: Server, label: "Secure Infrastructure" },
                { icon: Users, label: "Expert Team" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <item.icon className="h-16 w-16 text-blue-500 mb-4" />
                  <span className="text-lg font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">
              Comprehensive Security Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Cloud, label: "Cloud Services" },
                { icon: Database, label: "Data Management" },
                { icon: Wifi, label: "Network Solutions" },
                { icon: Lock, label: "Access Control" },
                { icon: HeadsetIcon, label: "24/7 Support" },
                { icon: BarChart, label: "Business Continuity" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <item.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.label}
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive {item.label.toLowerCase()} to ensure your
                    business stays secure and operational.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Partner with Us for Unmatched Security
            </h2>
            <p className="text-xl mb-8">
              We deliver a strong partnership built on a foundation of
              integrity, innovation, and exceptional customer service.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 px-8">
              <Link
                className="flex flex-row gap-2 items-center"
                href={"/meeting"}
              >
                Schedule a Consultation
                <HeadsetIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is NIST-powered cybersecurity?
                </AccordionTrigger>
                <AccordionContent>
                  NIST-powered cybersecurity refers to security practices and
                  frameworks based on guidelines set by the National Institute
                  of Standards and Technology. It provides a comprehensive
                  approach to managing and reducing cybersecurity risks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How can managed security services benefit my business?
                </AccordionTrigger>
                <AccordionContent>
                  Managed security services provide expert monitoring, threat
                  detection, and response capabilities. They can help reduce the
                  risk of cyber attacks, ensure compliance with regulations, and
                  allow your team to focus on core business activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What types of businesses do you serve?
                </AccordionTrigger>
                <AccordionContent>
                  We serve businesses of all sizes across various industries.
                  Our solutions are scalable and can be tailored to meet the
                  specific needs of small startups, mid-sized companies, and
                  large enterprises.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do you ensure 24/7 protection?
                </AccordionTrigger>
                <AccordionContent>
                  Our team of security experts works around the clock, utilizing
                  advanced monitoring tools and automated systems to provide
                  continuous protection. We have multiple layers of redundancy
                  to ensure uninterrupted service.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
