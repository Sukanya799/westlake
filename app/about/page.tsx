import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LetsMakeThingsHappenSection from "@/components/ui/MakeThingsHappen";
import React from "react";

const page = () => {
  return (
    <div
      className="flex flex-col  w-full overflow-clip inset-0 -z-10 
bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
  
  "
    >
      <Navbar />

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>
      <Footer />
    </div>
  );
};

export default page;
