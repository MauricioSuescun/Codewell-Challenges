import Navbar from "@/components/Navbar";
import Image from "next/image";
import Tinder from "../../public/assets/Logos/Tinder.svg";
import Samsung from "../../public/assets/Logos/Samsung.svg";
import Visa from "../../public/assets/Logos/Visa.svg";
import Walmart from "../../public/assets/Logos/Walmart.svg";
import JPMorgan from "../../public/assets/Logos/JP Morgan.svg";
import Verizon from "../../public/assets/Logos/Verizon.svg";
import Spense from "../../public/assets/Spense.png";
import Yelp from "../../public/assets/YelpCamp.png";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="mx-32">
        <Navbar />
        <div className="font-mono text-6xl pt-24 w-[70%]">
          Helping companies build better, scalable software.
        </div>
        <br />
        <div className="font-sans w-[50%] text-gray-500">
          Award-winning web developer and author, with over 15+ years of working
          experience with Fortune 500 companies like Apple, Google, Facebook,
          and more.
        </div>
        <div className="flex flex-row place-content-between py-16">
          <Image src={Walmart} alt="Walmart" />
          <Image src={JPMorgan} alt="JP Morgan" />
          <Image src={Visa} alt="Visa" />
          <Image src={Tinder} alt="Tinder" />
          <Image src={Samsung} alt="Samsung" />
          <Image src={Verizon} alt="Verizon" />
        </div>
        <div className="flex place-content-between pb-24">
          <div className="flex-col w-[50%]">
            <Image src={Spense} alt="Spense" />
            <h1 className="font-mono text-4xl py-2">Spense.com →</h1>
            <p className="font-sans text-gray-400 ">
              Rethinking the way writers get paid, an open-source platform
              designed to help writers focus more on writing, and less on when
              and how they&apos;ll get paid. Project in collaboration with
              Codewell.cc
            </p>
          </div>
          <div className="flex-col w-[50%] ml-16">
            <Image src={Yelp} alt="Yelp" />
            <h1 className="font-mono text-4xl py-2">YelpCamp.com →</h1>
            <p className="font-sans text-gray-400">
              Allowing backpack travelers to perfectly plan their trip through
              an open-source platform similar to TripAdvisor. With over lm MAU,
              YelpCamp has been the crowd&apos;s favorite in 2021.
            </p>
          </div>
        </div>
      </div>
      <Section />
      <div className="mx-32 pb-24">
        <div className="font-mono text-4xl pt-24 w-[70%]">
          Interested in working with me?
        </div>
        <br />
        <div className="font-sans w-[45%] text-gray-500">
          l&apos;m active on all social media platforms listed below, but you
          can also me an email and I Will get back to you within 24-48 hours.
        </div>
        <br />
        <div className="bg-[#FFFF00] text-black p-2 w-max">
          <button>Get in touch</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
