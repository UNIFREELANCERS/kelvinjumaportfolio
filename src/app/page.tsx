import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";
import { experiences, iconAndText, skills, reviews, buttons, portfolioData, blogs, cardData } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import OrangeButton from "@/components/ui/OrangeButton";
import ArrowButton from "@/components/ui/ArrowButton";
import whyImage from "../../why.jpg";
import PortfolioCarousel from "@/components/ui/PortfolioCarousel";
import EmailContactForm from "@/components/ui/EmailContactForm";

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div className="group flex flex-col md:flex-row w-full min-h-[600px] sm:min-h-[700px] lg:h-[700px] lg:-mb-2 xl:mb-0 xl:h-[846px] px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-center justify-center mt-6">
        <div className="hidden lg:flex flex-col w-[328px] h-[138px] items-start justify-start transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="text-[#344054] text-[36px] leading-none">&quot;</div>
          <p className="text-[#344054] text-[16px] font-medium leading-snug">
            Technology should solve meaningful problems and create opportunities.
            <br />
            — Kelvin Oluoch Juma
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="flex w-full max-w-[952px] flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[280px] group-hover:opacity-0 px-4 sm:px-6">
            <span className="h-[45px] px-[26px] py-[13px] translate-y-0 md:translate-y-10 rounded-full border border-[#171717] flex items-center justify-center bg-white mt-10">
              Hello!
            </span>
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end mb-1 mt-6 sm:mt-8">
              <CustomeText title="I&apos;m" className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              <div className="flex items-end">
                <CustomeText title="Kelvin" className="text-[#FD853A] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
                <CustomeText title="," className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              </div>
            </div>
            <CustomeText title="Full-Stack Web Developer" className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px] text-center" />
          </div>

          <div className="relative w-full max-w-[952px] aspect-[3/2] flex flex-col items-center justify-center -translate-y-[10%] sm:-translate-y-[15%] md:-translate-y-[20%] mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            <Image
              src="/ceo.png"
              alt="Portrait of Kelvin Oluoch Juma"
              width={1125}
              height={1125}
              sizes="(min-width: 1024px) 508px, 80vw"
              className="relative z-20 h-[80%] w-[80%] translate-y-[12%] object-contain object-bottom"
              priority
            />

            <div className="absolute bottom-[10%] z-30 w-full hidden md:flex justify-center">
              <DualToggleButtons />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[169px] h-[125px] flex-col items-end justify-end gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
            ))}
          </div>
          <h1 className="text-[32px] font-bold text-[#171717] leading-none whitespace-nowrap">
            4+ Years
          </h1>
          <p className="text-sm text-[#171717]">Experience</p>
        </div>
      </div>

      {/* Services */}
      <div id="service" className="relative scroll-mt-24 flex flex-col w-full min-h-[878px] gap-16 sm:gap-[96px] items-center px-4 sm:px-6 lg:px-[71px] py-16 sm:py-[116px] bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden -translate-y-8 sm:-translate-y-0 md:-translate-y-15 lg:translate-y-0 -mt-14">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10">
          <div className="flex gap-2.5">
            <CustomeText title="My" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]" />
            <CustomeText title="Services" className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FD853A]" />
          </div>
          <p className="w-full lg:w-[578px] font-medium text-base sm:text-lg lg:text-[20px] text-white">
            Website development, frontend and backend implementation, database-driven applications, API and payment integrations, maintenance, digital solutions, and technical support.
          </p>
        </div>

        <div className="relative w-full max-w-[1299px] flex items-start justify-center">
          <GenericSlider
            data={cardData}
            slidesPerView={3}
            heightClass="h-[500px] sm:h-[550px]"
            cardType="hover"
          />
        </div>
      </div>

      {/* Work Experience */}
      <div id="resume" className="w-full min-h-[600px] lg:h-[827px] flex flex-col items-start mx-auto px-4 sm:px-6 lg:px-[71px] py-8 lg:py-16 scroll-mt-24">
        <div className="w-full h-auto lg:h-[234px] flex lg:flex-row items-start justify-center space-x-2.5 mb-8 lg:mb-16 text-center lg:text-left">
          <CustomeText title="My" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#344054]" />
          <CustomeText title="Work" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
          <CustomeText title="Experience" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
        </div>

        <div className="w-full lg:hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`} />
                </div>

                <div className="flex-1">
                  <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[20px] sm:text-[24px] mb-1" />
                  <CustomeText title={exp.duration} className="text-[#98A2B3] text-[14px] sm:text-[16px] mb-2" />
                  <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[18px] sm:text-[20px] mb-2" />
                  {exp.desc && (
                    <CustomeText title={exp.desc} className="text-[#98A2B3] text-[14px] sm:text-[16px] leading-relaxed" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-auto lg:h-[438px] hidden lg:flex justify-evenly">
          <div className="flex flex-col justify-between w-[495px] h-[438px] gap-[102px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[40px]" />
                <CustomeText title={exp.duration} className="text-2xl text-[#98A2B3]" />
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center justify-between">
            <div className="absolute top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#1D2939]" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                <div className={`w-9 h-9 rounded-full z-10 ${exp.dotColor}`} />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between w-[444px] h-[400px] gap-[48px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[40px]" />
                {exp.desc && (
                  <CustomeText title={exp.desc} className="text-2xl text-[#98A2B3]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Me */}
      <div id="about" className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[71px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px] scroll-mt-24">
        <div className="relative w-full max-w-[500px] aspect-square group mx-auto lg:mx-0">
          <Image
            src={whyImage}
            alt="Kelvin working at his desk"
            fill
            className="object-cover z-10 transition-all duration-300 ease-in-out group-hover:translate-y-3"
            priority
          />

          <Image
            src={whyImage}
            alt=""
            fill
            className="object-cover absolute -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
          />
        </div>

        <div className="w-full max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <CustomeText title="Why" className="text-[#344054]" />
            <CustomeText title="Hire me" className="text-[#FD853A]" />
            <CustomeText title="?" className="text-[#344054]" />
          </div>

          <p className="text-[#98A2B3] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
            I’m a Nairobi-based full-stack web developer and digital professional with 4+ years of experience and 15+ websites worked on. I build websites, web applications, and digital systems that solve practical problems. I’m pursuing a BA in Psychology (Year 3) at Chuka University and lead UNI Freelancers Africa, supporting youth digital skills and economic opportunities. I also serve as Chairperson and Lead Choreographer of Chuka University Dancers.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex flex-col">
              <CustomeText
                title="15+"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomeText
                title="Websites Worked On"
                className="text-lg text-[#667085]"
              />
            </div>
            <div className="flex flex-col">
              <CustomeText
                title="4+"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomeText
                title="Years in Web Development"
                className="text-lg text-[#667085]"
              />
            </div>
          </div>

          <a href="mailto:juma@unifreelancersafrica.org" className="w-full cursor-pointer sm:w-auto px-6 py-4 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#151515] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#151515]">
            Hire me
          </a>
        </div>
      </div>

      {/* Portfolio */}
      <div id="project" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
            <CustomeText
              title="Lets Have a look at"
              className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
            />
            <div className="flex items-start justify-start gap-4 flex-wrap">
              <CustomeText
                title="my"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
              />
              <CustomeText
                title="Portfolio"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#FD853A]"
              />
            </div>
          </div>

          <div className="shrink-0">
            <OrangeButton title="See All" href="#portfolio-cards" />
          </div>
        </div>

        <div className="w-full max-w-[1290px] flex flex-col items-center">
          <PortfolioCarousel data={portfolioData} categories={buttons} />

          <div className="flex flex-col w-full max-w-[742px] items-start gap-6 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-4 sm:gap-[18px]">
              <CustomeText
                title="Additional Projects"
                className="font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-[#344054]"
              />
              <div className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#FD853A] hidden md:flex items-center justify-center transition-all duration-300">
                <ArrowButton className="transition-all duration-300 stroke-white -rotate-45" />
              </div>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#344054] text-center sm:text-left">
              Additional work includes Ballers Lane, a sports technology project involving payment workflows and escrow; the Franco Odhiambo personal branding website; and Nane Dance Hub, a website supporting a dance and creative community.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {reviews.length > 0 && (
        <div className="relative flex flex-col w-full min-h-[900px] items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-[96px] gap-12 bg-[#171717] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden">
          <Image
            src="/Frame 77.svg"
            alt=""
            fill
            className="object-cover absolute opacity-50"
          />

          <div className="flex flex-col w-full max-w-[1299px] items-center gap-4 z-10 px-2">
            <div className="flex flex-col items-center max-w-full sm:max-w-[448px]">
              <CustomeText
                title="Client"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD] text-center"
              />
              <CustomeText
                title="Testimonials"
                className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD]"
              />
            </div>
          </div>

          <div className="absolute bottom-[20%] left-0 right-0 w-full z-10">
            <GenericSlider
              data={reviews}
              slidesPerView={3}
              heightClass=""
              cardType="review"
            />
          </div>
        </div>
      )}


      {/* Contact */}
      <div id="contact" className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-[71px] gap-10 scroll-mt-24">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
          <CustomeText
            title="Have an Awesome Project"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Idea?"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Let's Discuss"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#FD853A]"
            />
          </div>
        </div>

        <EmailContactForm variant="contact" />

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-[#000000]">
          {iconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} />
                {data.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Slider */}
      <div className="relative w-full h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden">
        <div className="absolute w-[5000px] h-[63px] bg-white -rotate-2 -mt-2 md:mt-0 md:-rotate-[1.9deg] z-10 -ml-2 flex items-center">
          <div className="marquee flex gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 text-[#000000] text-[48px] whitespace-nowrap"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                    fill="#FD853A"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More Project Highlights */}
      <div id="project-highlights" className="flex w-full flex-col items-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-[71px] py-12 sm:py-16 lg:py-[97px]">
        <div className="flex w-full max-w-[1298px] flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          <h2 className="w-full font-bold text-3xl text-[#344054] sm:text-4xl md:text-5xl">More Project Highlights</h2>
          <OrangeButton title="See All" href="#project-highlights-cards" className="w-full sm:w-fit" />
        </div>
        <div id="project-highlights-cards" className="w-full scroll-mt-24">
          <GenericSlider
            data={blogs}
            slidesPerView={3}
            heightClass=""
            cardType="blog"
          />
        </div>
      </div>

    </div>
  );
}